const { neon } = require('@neondatabase/serverless'); console.log('Neon DB pull script'); const sql = neon('postgresql://user:password@your-neon-hostname/database'); console.log('Script completed');
