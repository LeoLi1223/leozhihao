const {Router} = require('express');
const router = Router();

const {readblogs} = require('../controllers/readblogs');

router.get('/read-blogs', readblogs);

module.exports = router;