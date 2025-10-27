import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit, getClientIdentifier } from '@/lib/utils/rateLimit';
import { validateNewsletter, sanitizeInput } from '@/lib/utils/validation';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - stricter for newsletter
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimit(identifier, 2, 60 * 60 * 1000); // 2 requests per hour
    
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Sanitize and validate
    const sanitizedEmail = sanitizeInput(email);
    const validation = validateNewsletter(sanitizedEmail);
    
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid email' },
        { status: 400 }
      );
    }

    // If using a newsletter service (e.g., ConvertKit, Mailchimp), integrate here
    // For now, we'll use Resend to send a notification

    if (!resend || !process.env.RESEND_FROM_EMAIL) {
      console.log('Newsletter subscription (email not configured):', sanitizedEmail);
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
      });
    }

    // Send notification email to admin
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_FROM_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p>Add this email to your newsletter list.</p>
      `,
    });

    // Optionally send welcome email to subscriber
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: sanitizedEmail,
      subject: 'Welcome to Teebot Newsletter',
      html: `
        <h2>Welcome to Teebot!</h2>
        <p>Thank you for subscribing to our newsletter. You'll be the first to know about our latest updates, projects, and insights.</p>
        <p>Stay tuned!</p>
        <p>- The Teebot Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email.',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

