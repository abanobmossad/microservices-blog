const express = require('express');

const router = express.Router();

router.get('/comments', (req, res) => {
  res.send('comments');
});

router.post('/comments', (req, res) => {
  res.send('comments');
});
