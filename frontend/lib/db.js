// lib/db.js - Database connection for Vercel
import mysql from 'mysql2/promise';

// Parse the DATABASE_URL
const parseDbUrl = (url) => {
  const dbUrl = new URL(url);
  return {
    host: dbUrl.hostname,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), // Remove the leading slash
    port: dbUrl.port || 3306,
    connectTimeout: 10000,
    ssl: {
      rejectUnauthorized: false
    }
  };
};

// Database configuration
const dbConfig = parseDbUrl(process.env.DATABASE_URL);

// Create connection pool for better performance
const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection function
export const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database.');
    console.log(`📊 Database: ${dbConfig.database} on ${dbConfig.host}`);
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
};

// Execute query function
export const executeQuery = async (query, params = []) => {
  try {
    const [results] = await pool.execute(query, params);
    return results;
  } catch (error) {
    console.error('❌ Query execution failed:', error.message);
    throw error;
  }
};

// Get connection for transactions
export const getConnection = async () => {
  return await pool.getConnection();
};

export default pool;