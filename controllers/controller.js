const db = require("../models");

const Token = [];
// Defining methods for the controller
module.exports = {
 
  takeInfo: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  loadUser: function () {
    alert("You have succesfully Signed Up");
  },

  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addUser: function (req, res) {
    console.log("THIS IS WORKING!!!!!!!!!!!!!!!!!!!");
    console.log(req);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findUser: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => { 
        console.log(err);
        res.status(422).json(err)
      });
    while (Token.length > 0) {
      Token.pop();
    }
      Token.push(req.query);
      console.log("this is your data")
    console.log(Token);
    console.log(req.query)
  },

  userUpdate: function(req, res) {
    console.log(req);
    var query   = { userName: req.body.user }; 
    var update  = { userDrugs: req.body }; 
    var options = { new: true }; 
    db.User
      .findOneAndUpdate(query, {$push : update}, options)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // redirect: function (Token) {
  //   window.location = "http://localhost:3000/drugs"
  // },

  findAllDrugs: function(req, res) {
    console.log(req);
    var query = req.query[0];

    db.Drug
      .find({ active_ingredient : query})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  displayUser: function (req, res) {
    
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)   
      });
  },

  findAll: function(req, res) {
    console.log(req.query[0]);
    var query = req.query[0];
    console.log(query);
    db.User
      .find({ userName : query})

      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Drug
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Drug
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Drug
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    console.log(req);
    var query   = { userName: req.query.user}; 
    var update  = { userDrugs: {drug : req.query.drug} }; 
    //var options = { new: true }; 
    db.User
      .findOneAndUpdate(query, {$pull : update})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findADrug: function (req, res) {
    console.log("route hit");
    var name="active_ingredient";
    var value = req.params.value;
    db.Drug.findOne({[name]:value}, function(err, item) {
    console.log(item);
    res.json(item);

    });
  }
};


// var name="active_ingredient";
// var value = req.params.value;
// collection.findOne({[name]:value}, function(err, item) {
// res.send(item);
// });

// var name = req.params.name;
// var value = req.params.value;
// var query = {};
// query[name] = value;
// collection.findOne(query, function (err, item) { ... });

