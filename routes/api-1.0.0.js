const CrudController = require('../controllers/crud');

module.exports = (app) => {
	// HTTP Requests

	// creating and dropping table
	app.post('/api/v1/employee/create.json', CrudController.createTable);
	app.delete('/api/v1/employee/drop.json', CrudController.dropTable);


	// CRUD Operations
	app.get('/api/v1/students.json', CrudController.get);
	app.post('/api/v1/students.json', CrudController.post);
	app.put('/api/v1/students.json/:id', CrudController.put);
	app.delete('/api/v1/students.json/:id', CrudController.delete);
}