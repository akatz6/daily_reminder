var mongoose = require('mongoose'),
Todo = mongoose.model('Todo');
Login = mongoose.model('Login');
var bcrypt = require('bcrypt');
var name = ""

module.exports = (function(){
  return {
  	save_name:function(req, res){
  		req.session.user = req.body.user
      bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
      Login.findOne({name: req.body.user, password:bcrypt.genSaltSync(8),
        function(err){
          if(err){
            res.json({'error': true});
          } else {
            res.json({'sucess': true});
          }
        }
      })
  		res.json({'user': req.session.user})
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
      bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
      console.log(bcrypt.genSaltSync(8))
      login = new Login({
        name:req.body.user,
        password: bcrypt.genSaltSync(8)
      })
      login.save(function(err){
        if(err){
          res.json({'error': true});
        } else {
          res.json({'sucess': true})
        }
      })
    } // end of register user function
  } 
})();