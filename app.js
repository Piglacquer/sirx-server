const express = require('express');
const cors = require('cors');
const app = express();
const blog = require('./routes/blog.js');
const port = process.env.PORT || 3002
require('dotenv').config();

app.use(cors());
app.use('/blog', blog);

app.listen(port, () => console.warn(`yeet listening on ${port}`))