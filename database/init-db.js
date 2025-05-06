const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

// Replace with your actual Neon database connection string
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://user:password@your-neon-hostname/database';

async function initDatabase() {
  try {
    console.log('Initializing database...');
    
    // Create SQL client
    const sql = neon(DATABASE_URL);
    
    // Read schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSQL = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute schema
    await sql.raw(schemaSQL);
    
    console.log('Database schema initialized successfully!');
    
    // Test the comments table
    await sql`INSERT INTO comments (comment) VALUES ('Test comment from init script')`;
    const comments = await sql`SELECT * FROM comments`;
    console.log('Comments from database:', comments);
    
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}

// Run if this file is executed directly
if (require.main === module) {
  initDatabase();
}

module.exports = { initDatabase }; 