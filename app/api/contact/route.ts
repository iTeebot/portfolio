import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit, getClientIdentifier } from '@/lib/utils/rateLimit';
import { validateContactForm, sanitizeInput } from '@/lib/utils/validation';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimit(identifier, 3, 15 * 60 * 1000); // 3 requests per 15 minutes
    
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
    };

    // Validate
    const validation = validateContactForm(sanitizedData);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend || !process.env.RESEND_FROM_EMAIL) {
      console.log('Contact form submission (email not configured):', sanitizedData);
      return NextResponse.json({
        success: true,
        message: 'Message received! We\'ll get back to you soon.',
      });
    }

    // Send email via Resend
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_FROM_EMAIL, // Send to yourself
      replyTo: sanitizedData.email,
      subject: `Contact Form: ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

