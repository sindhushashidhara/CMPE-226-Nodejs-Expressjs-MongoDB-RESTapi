var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome' });
});

/* GET Hello World page. */
router.get('/mainscreen',function(req,res) {
     res.render('mainscreen', { title: 'CMPE 226 Database Systems Home Depot'});
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* POST to Add User Service */
router.post('/mainscreen', function(req, res) {
    res.render('product');
});

/* GET product Refrigerator page. */
router.get('/product', function(req, res) {
    var db = req.db;
    var collection = db.get('product');
    collection.find({'category':'Appliances'},{},function(e,docs){
        res.render('product', {
            "product" : docs
        });
    });
});

/* POST to Add User Service */
router.post('/product', function(req, res) {
    res.render('tv');
});

/* GET product TV page. */
router.get('/tv', function(req, res) {
    var db = req.db;
    var collection = db.get('product');
    collection.find({'category':'Electronics'},{},function(e,docs){
        res.render('tv', {
            "tv" : docs
        });
    });
});

/* GET product NailPolish page. */
router.get('/nailpolish', function(req, res) {
    var db = req.db;
    var collection = db.get('product');
    collection.find({'category':'NailPolish'},{},function(e,docs){
        res.render('nailpolish', {
            "nailpolish" : docs
        });
    });
});

/* GET product Books page. */
router.get('/books', function(req, res) {
    var db = req.db;
    var collection = db.get('product');
    collection.find({'category':'Books'},{},function(e,docs){
        res.render('books', {
            "books" : docs
        });
    });
});
module.exports = router;
