const CrudModel = {};


CrudModel.createTable = () => {
	let sql = `
		CREATE TABLE IF NOT EXISTS public.employee_new (
			id SERIAL PRIMARY KEY,
			empcode INT,
			empname VARCHAR(255),
			position VARCHAR(255)
		)
	`;
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then(r => {
					console.log(r, '\nTable created successfully!');
					resolve(undefined);
				}, err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				});
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	});
}

CrudModel.dropTable = () => {
	let sql = 'DROP TABLE IF EXISTS public.employee_new';
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then(r => {
					console.log(r, '\nTable dropped successfully!');
					resolve(undefined);
				}, err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				})
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	})
}

CrudModel.get = () => {
	let sql = "SELECT * FROM public.students";
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then(r => {
					console.log(r);
					if (r.rowCount > 0) {
						resolve(r.rows);
					} else {
						resolve(undefined);
					}
				}, err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				})
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	});
}

CrudModel.insert = (name, email, age, dob) => {
	let sql = `INSERT INTO public.students (name, email, age, dob) VALUES ('${name}', '${email}', '${age}', '${dob}')`;
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then(r => {
					console.log(r, '\nData inserted successfully!');
					resolve(r.rowCount);
				})
				.catch(err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				})
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	})
}


CrudModel.edit = (id, name, email, age, dob) => {
	let sql = `UPDATE public.students SET name = '${name}', email = '${email}', age = '${age}', dob = '${dob}' WHERE id = '${id}'`;
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then(r => {
					console.log(r, '\nData updated successfuly!');
					resolve(r.rowCount);
				})
				.catch(err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				})
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	})
}

CrudModel.delete = (id) => {
	let sql = `DELETE FROM public.students WHERE id = '${id}'`;
	console.log(sql);
	return new Promise((resolve, reject) => {
		try {
			db.query(sql)
				.then (r => {
					console.log(r);
					resolve(r.rowCount);
				}, err => {
					console.log('models.students - ' + err);
					console.log('models.students - ' + sql);
					resolve(undefined);
				});
		} catch (err) {
			console.log('models.students - ' + err);
			console.log('models.students - ' + sql);
			resolve(undefined);
		}
	});
}

module.exports = CrudModel;