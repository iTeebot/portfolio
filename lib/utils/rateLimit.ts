// Simple in-memory rate limiter
// For production, use Redis or similar

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export function rateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = store[identifier];

  // Clean up old entries periodically
  if (Math.random() < 0.01) {
    cleanupStore(now);
  }

  if (!record || now > record.resetTime) {
    store[identifier] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return { success: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: maxRequests - record.count };
}

function cleanupStore(now: number): void {
  Object.keys(store).forEach((key) => {
    if (now > store[key].resetTime) {
      delete store[key];
    }
  });
}

// Get client IP from request
export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

