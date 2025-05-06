require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const onboardingRouter = require('./routes/onboarding');
const listingRouter = require('./routes/listing');
const commentsRouter = require('./routes/comments');

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

app.use('/api/onboarding', onboardingRouter);
app.use('/api/listing', listingRouter);
app.use('/api/comments', commentsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 