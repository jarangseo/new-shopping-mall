var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    res.send('admin app')
})

router.get('/products', function(_, res){
    res.render('admin/products.html', 
        {title: 'hello'}
    )
})

module.exports = router