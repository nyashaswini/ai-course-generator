import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(
    ['/dashboard(.*)','/create-course']
)

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    // Only protect if it's not an API route
    if (!req.url.startsWith('/api')) {
      return auth().protect()
    }
  }
  return null
})
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