const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	fetch(`https://${process.env.SHOPIFY_KEY}:${process.env.SHOPIFY_PASS}@sirx-mobility.myshopify.com/admin/blogs/blog_id/articles.json`)
	.then(resp => resp.json())
	.then(resp => res.send(resp.articles))
})

module.exports = router;