const express = require('express');
const router = express.Router();
const commentsDB = require('../database/comments');

/**
 * GET /api/comments
 * Get all comments
 */
router.get('/', async (req, res) => {
  try {
    const comments = await commentsDB.getAll();
    res.json({ success: true, comments });
  } catch (error) {
    console.error('Error in GET /comments:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve comments' });
  }
});

/**
 * POST /api/comments
 * Add a new comment
 */
router.post('/', async (req, res) => {
  try {
    const { comment } = req.body;
    
    if (!comment || typeof comment !== 'string' || comment.trim() === '') {
      return res.status(400).json({ success: false, message: 'Comment text is required' });
    }
    
    const newComment = await commentsDB.add(comment.trim());
    res.status(201).json({ success: true, comment: newComment });
  } catch (error) {
    console.error('Error in POST /comments:', error);
    res.status(500).json({ success: false, message: 'Failed to add comment' });
  }
});

/**
 * DELETE /api/comments/:id
 * Delete a comment by ID
 */
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid comment ID' });
    }
    
    const success = await commentsDB.delete(id);
    
    if (!success) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error(`Error in DELETE /comments/${req.params.id}:`, error);
    res.status(500).json({ success: false, message: 'Failed to delete comment' });
  }
});

module.exports = router; 