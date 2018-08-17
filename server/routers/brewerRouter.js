var express = require('express');
var router = express.Router();
var validator = require('validator');
var db = require('../models/index');
//console.log('dssdasda');

router.get('/',function(req,res){

   res.send('brewer route');

});
router.get('/:page', (req, res) => {
    let limit = 2;   // number of records per page
    let offset = 0;
    let ismore=false;
    db.Brewer.findAndCountAll().then((data) => {
      let page = req.params.page;      // page number
      let pages = Math.ceil(data.count / limit);
          offset = limit * (page - 1);
          let more=limit*page;
          if(more<data.count)
          {
              ismore=true;
          }
        
      db.Brewer.findAll({
        attributes: ['id', 'name', 'address', 'image','description'],
        limit: limit,
        offset: offset,
        order: [
            ['createdAt', 'DESC']
        ]
      }).then((users) => {
        res.status(200).json({'error':true,data:users,'Totalcount': data.count, 'pages': pages,'ismore':ismore});
      });
    }).catch(function (error) {
          res.status(200).json({'error':false,'data':error});
      });
  });

router.get('/all',function (req, res) {
 db.Brewer.findAll().then(function (brewers) {
      if (brewers.length === 0) {
        res.json('There are no Brewer in the database');
      }
      res.json(brewers);
    });
  });

router.post('/create',function(req,res){
   //console.log(req.body);
   db.Brewer.create(req.body).then(response => {
    res.status(200).json({'error':false,data:response});
  }).catch(function(error){
     res.status(200).json({'error':true,data:error});
  });
  
});

router.get('/id/:brewerid',function (req, res) {
    if (!validator.isUUID(req.params.brewerid)) {
      res.json('Bewer id is not a valid UUID');
    }
    db.Brewer.findOne({
      where: {
        id: req.params.brewerid
      }
    }).then(function (Brewer) {
      if (!Brewer) {
        res.json('There is no Brewer for this brewer id');
      } 
      res.json(Brewer)
    });
  });

  router.delete('/id/:brewerid',function (req, res) {
    if (!validator.isUUID(req.params.brewerid)) {
      res.json('Bewer id is not a valid UUID');
    }
    db.Brewer.findOne({
      where: {
        id: req.params.brewerid
      }
    }).then(function (Brewer) {
      if (!Brewer) {
        res.json('There is no Brewer for this brewer id');
      } 
   Brewer.destroy().then(res=>{
             res.json('deleted'+res);
         }).catch(err=>{
            res.json({'error':true,data:err});
         });
            
        
    
    });
  });
module.exports = router;