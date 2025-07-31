import { Pool } from 'pg';
import { createClient } from 'redis';

export const db = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'roastbot',
  user: 'raamasrivatsan',
  ssl: false
});

export const redis = createClient({
  url: process.env.REDIS_URL
});

redis.on('error', (err) => console.error('Redis error:', err));

export async function initDatabase() {
  try {
    // Test PostgreSQL connection
    const client = await db.connect();
    console.log('✅ PostgreSQL connected');
    client.release();
    
    await redis.connect();
    console.log('✅ Redis connected');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}