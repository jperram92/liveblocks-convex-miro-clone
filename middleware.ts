import { authMiddleware } from "@clerk/nextjs";
import { rateLimit } from './lib/rate-limit';
import { cors } from './lib/cors';

export default authMiddleware({
  beforeAuth: (req) => {
    // Add security headers
    const headers = new Headers(req.headers);
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    return new Request(req.url, {
      headers,
      method: req.method,
      body: req.body,
    });
  },
  afterAuth: rateLimit,
  publicRoutes: ['/api/health', '/api/webhook'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
