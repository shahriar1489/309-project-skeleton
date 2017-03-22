module.exports = function(app){

 var organizations = require('./../controllers/organizations.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/organizations')
	.get(organizations.list)
	.post(users.requiresLogin, organizations.create);

  app.route('/api/organizations/:organizationId')
	.get(organizations.read)
  .delete(users.requiresLogin, organizations.delete);

	app.route('/api/organizations/edit/:organizationId')
	.get(organizations.read)
	.put(users.requiresLogin, organizations.update);


app.param('organizationId', organizations.organizationByID);


}
// sudo apt-get install -y mongodb-org
// mkdir data