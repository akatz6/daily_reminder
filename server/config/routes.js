var user = require('../controllers/users.js');

module.exports = function(app){
	app.post('/name', user.save_name)
	app.get('/get_name', user.return_name)
	app.post('/submit', user.submit)
	app.get('/get_list', user.get_list)
	app.post('/deleteOne', user.delete_one)
	app.post('/get_item', user.get_item)
	app.post('/update_item', user.update_item)
	app.post('/register', user.register)
}