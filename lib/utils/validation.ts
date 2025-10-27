// Input validation and sanitization

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .slice(0, 10000); // Max length
}

export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Invalid email address');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateNewsletter(email: string): { valid: boolean; error?: string } {
  if (!email || !validateEmail(email)) {
    return { valid: false, error: 'Invalid email address' };
  }
  return { valid: true };
}

