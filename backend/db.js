require('dotenv').config();
const mysql = require('mysql2');
const { URL } = require('url');

// Check if DATABASE_URL is loaded
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in the environment variables.');
  process.exit(1);
}

// Parse the DATABASE_URL from the .env file
const dbUrl = new URL(process.env.DATABASE_URL);

// Create connection configuration
const dbConfig = {
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1), // Remove the leading slash
  port: dbUrl.port || 3306,
  // Correct timeout options for mysql2
  connectTimeout: 10000,
  // acquireTimeout and timeout are for connection pools, not single connections
};

// For Railway deployment, you might need to add SSL configuration
if (process.env.NODE_ENV === 'production' || dbUrl.hostname.includes('railway')) {
  dbConfig.ssl = {
    rejectUnauthorized: false
  };
}

console.log(`🔗 Attempting to connect to: ${dbUrl.hostname}:${dbUrl.port || 3306}`);

// Create a connection using the parsed URL
const db = mysql.createConnection(dbConfig);

// Connect to MySQL with error handling
db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    console.error('Connection details:', {
      host: dbConfig.host,
      port: dbConfig.port,
      database: dbConfig.database,
      user: dbConfig.user
    });
    
    // Don't exit immediately in case this is being imported
    if (require.main === module) {
      process.exit(1);
    }
  } else {
    console.log('✅ Connected to MySQL database.');
    console.log(`📊 Database: ${dbConfig.database} on ${dbConfig.host}`);
  }
});

// Handle connection errors
db.on('error', (err) => {
  console.error('❌ Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('🔄 Attempting to reconnect...');
    // Handle reconnection logic here if needed
  }
});

module.exports = db;