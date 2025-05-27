const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.get('/', (req, res) => res.send('Hello from Backend! HEllO Buddi papa ..... Deepu!!!!!!!!!!!!!!!!'));

app.listen(3000, () => console.log('Server running on port 3000'));
