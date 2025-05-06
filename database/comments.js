const { neon } = require('@neondatabase/serverless');

// Replace with your actual Neon database connection string
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://user:password@your-neon-hostname/database';

// Create SQL client
const sql = neon(DATABASE_URL);

/**
 * Comments database operations
 */
const commentsDB = {
  /**
   * Get all comments
   * @returns {Promise<Array>} Array of comment objects
   */
  getAll: async () => {
    try {
      return await sql`SELECT * FROM comments ORDER BY created_at DESC`;
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  },

  /**
   * Add a new comment
   * @param {string} comment - The comment text
   * @returns {Promise<Object>} The newly created comment
   */
  add: async (comment) => {
    try {
      const result = await sql`
        INSERT INTO comments (comment)
        VALUES (${comment})
        RETURNING *
      `;
      return result[0];
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  /**
   * Delete a comment by ID
   * @param {number} id - The comment ID to delete
   * @returns {Promise<boolean>} Success status
   */
  delete: async (id) => {
    try {
      const result = await sql`
        DELETE FROM comments
        WHERE id = ${id}
      `;
      return result.count > 0;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  }
};

module.exports = commentsDB; 