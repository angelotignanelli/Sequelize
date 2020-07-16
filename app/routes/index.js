var express = require('express');
var router = express.Router();
const dbcontroller = require('../controllers/dbcontroller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/movies", dbcontroller.list);
router.get("/movies/detail/:id", dbcontroller.detail);
router.get("/movies/new", dbcontroller.new);
router.get("/movies/recommended", dbcontroller.rec);
router.get("/movies/search", dbcontroller.search);
router.post("/movies/search", dbcontroller.search);

module.exports = router;
