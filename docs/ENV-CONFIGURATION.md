# Environment Configuration Guide

Create a `.env.local` file in the root directory with the following variables:

```bash
# Email Configuration
# Use Resend for modern email API (recommended) - Get API key from https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@iteebot.com

# Newsletter Configuration  
# Use ConvertKit, Mailchimp, or similar for newsletter
NEWSLETTER_API_KEY=your_newsletter_api_key_here
NEWSLETTER_LIST_ID=your_list_id_here

# Rate Limiting
# Configure rate limits to prevent spam
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=900000

# Security
# Add your domain for CORS
ALLOWED_ORIGINS=https://iteebot.com,https://www.iteebot.com

# Optional: Turnstile/reCAPTCHA for bot protection
# Get keys from Cloudflare Turnstile or Google reCAPTCHA
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
```

## Setup Instructions

1. **Email (Resend)**: Sign up at https://resend.com and get your API key
2. **Newsletter**: Choose a provider (ConvertKit, Mailchimp, etc.) and add credentials
3. **Bot Protection**: Set up Cloudflare Turnstile for free bot protection
4. **Rate Limiting**: Adjust limits based on your needs

## Security Features

- Rate limiting on all form submissions
- Bot protection via Turnstile
- CORS validation
- Input sanitization
- Email validation

