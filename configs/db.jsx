import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Check if we're in a build context
const isBuildTime = process.env.NEXT_PUBLIC_BUILD_TIME === 'true';

// During build time, we don't need a database connection
export const db = isBuildTime 
  ? { query: () => Promise.resolve(null) }
  : drizzle(neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING));

