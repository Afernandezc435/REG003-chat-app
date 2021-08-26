const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const application = express();
const port = process.env.PORT || 3000;
application.get('/', (req, res) => {
  res.send('Hello World!');
});
application.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//const
