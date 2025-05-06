const express = require('express');
const router = express.Router();

// Start car listing conversation
router.post('/start', (req, res) => {
  res.json({
    message: "Let's list your car! What is the make and model?",
    step: 1
  });
});

// Next step in listing
router.post('/next', (req, res) => {
  const { step, answer } = req.body;
  if (step === 1) {
    res.json({ message: 'What is the year of manufacture?', step: 2 });
  } else if (step === 2) {
    res.json({ message: 'What is the mileage?', step: 3 });
  } else if (step === 3) {
    res.json({ message: 'Please upload photos of your car.', step: 4 });
  } else {
    res.json({ message: 'Thank you! Your car listing is being created.', step: 'done' });
  }
});

// Finish listing
router.post('/finish', (req, res) => {
  res.json({ message: 'Listing complete! Your car is now live.', listingId: 'example123' });
});

module.exports = router; 