const express = require('express');
const bodyParser = require('body-parser');
const signupModule = require('./modules/signup');
const signinModule = require('./modules/signin');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/signup', signupModule);
app.post('/signin', signinModule);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
