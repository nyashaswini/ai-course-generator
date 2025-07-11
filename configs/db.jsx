import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Only connect to database in server components
export const db = process.env.NODE_ENV === 'production' 
  ? { query: () => Promise.resolve(null) }
  : drizzle(neon(process.env.NEXT_PUBLIC_DB_CONNECTION_STRING));

