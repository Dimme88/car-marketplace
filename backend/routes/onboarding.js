const express = require('express');
const router = express.Router();

// Start onboarding conversation
router.post('/start', (req, res) => {
  // Example: return first onboarding question
  res.json({
    message: 'Welcome! What is your budget for a car?',
    step: 1
  });
});

// Next step in onboarding
router.post('/next', (req, res) => {
  // Example: process answer and return next question
  const { step, answer } = req.body;
  if (step === 1) {
    res.json({ message: 'What type of car fits your lifestyle? (e.g., SUV, hatchback, electric)', step: 2 });
  } else if (step === 2) {
    res.json({ message: 'Do you have any brand preferences?', step: 3 });
  } else {
    res.json({ message: 'Thank you! We will recommend cars for you soon.', step: 'done' });
  }
});

// Finish onboarding
router.post('/finish', (req, res) => {
  // Example: return summary or recommendations
  res.json({ message: 'Onboarding complete! Here are your matches.', cars: [] });
});

module.exports = router; 