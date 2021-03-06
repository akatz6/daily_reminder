var mongoose = require('mongoose'),
Todo = mongoose.model('Todo');
Login = mongoose.model('Login');
var bcrypt = require('bcrypt');
var name = ""

module.exports = (function(){
  return {
   save_name: function(req, res) {
    Login.findOne({ name: req.body.user },
      function(err, user) {
        if (!user)
          return res.json({ error: true });
        bcrypt.compare(req.body.password,
         user.password,
         function(err, valid) {
          if(valid){
            req.session.user = req.body.user;
            res.json({"error": false});
          } else{
            res.json({"error": true});
          }
        })
      })
  	}, //end of save name method
  	return_name:function(req, res){
  		res.json({'user': req.session.user})
  	}, //end of return name method
    submit:function(req, res){
      var todo = new Todo({
        name: req.session.user,
        date: req.body.date,
        item: req.body.item,
      })
      todo.save(function(err){
        if(err){
          console.log("In the error statement",err)
          res.json({"error": true});
        } 
        else {
         res.json({"success": true});
       }
     })
    },// end of submit method
    get_list:function(req, res){
      var date = new Date()
      date.setHours(0,0,0,0)
      console.log(date)
      Todo.find({name:req.session.user, date:date}, function(err, user){
        if(err){
          res.json({"error": true})
        } else {
          res.json({user:user})
        }

      })
    }, // end of get list method
    delete_one:function(req, res){
      Todo.remove({_id: req.body.id}, function(err){
        if(err){
          res.json({'error': true})
        } else {
          res.json({'success': true})
        }
      })
    }, // end of delete one method
    get_item:function(req, res){
      Todo.findOne({_id:req.body.item.id}, function(err, item){
        if(err){
          res.json({'error': true})
        }else{
          res.json({'item':item})
        }
      })
    }, // end of get item method
    update_item:function(req, res){
      Todo.findOne({_id:req.body.id}, function(err, todo){
        if(err){
          console.log(err)
          res.json({'error': true})
        }else{
          todo.date = req.body.date;
          todo.item = req.body.item;
          todo.save(function(err){
            if(err){
              console.log(err)
              res.json({'error': true})
            } else {
              res.json({'success': true})
            }
          })
        }
      })
    }, // end of update item function
    register:function(req, res){
      bcrypt.hash(req.body.password, 8, function(err, hash) {
        if (err)
          return res.json({ error: true });
        login = new Login({
          name: req.body.user,
          password: hash
        })
        login.save(function(err) {
          if(err){
            res.json({'error': true})
          } else {
           res.json({'success': true})
         }
       })
      })
    }, // end of register user function
    clear_name:function(req, res){
      req.session.user = "";
      res.json({'user': req.session.user})
    }
  } 
})();