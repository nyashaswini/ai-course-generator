import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()
export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\.(?:html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/api/(.*)',
    // Always run for dashboard and create-course routes
    '/dashboard/(.*)',
    '/create-course/(.*)'
  ],
}