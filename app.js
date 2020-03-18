const express = require('express');
const cors = require('cors');
const app = express();
const blog = require('./routes/blog.js');
require('dotenv').config();

app.use(cors());
app.use('/blog', blog);

app.listen(3002, () => console.warn('yeet listening on 3002'))