const CrudController = {};
const MESSAGE = require('../models/messages');
const StudentsModel = require('../models/crud');
const CrudModel = require('../models/crud');

CrudController.get = async (req, res, next) => {
	const select = await StudentsModel.get();
	if (select !== undefined) {
		return res.json({
			success: true,
			data: select,
			message: MESSAGE.OPERATION_SUCCESS
		});
	} else {
		return res.json({
			success: false,
			message: MESSAGE.NO_DATA_AVAILABLE
		});
	}
}

CrudController.post = async (req, res, next) => {
	const { name, email, age, dob } = req.body;
	const data = await StudentsModel.insert(name, email, age, dob);
	if (data !== undefined) {
		return res.json({
			success: true,
			data: data,
			message: MESSAGE.OPERATION_SUCCESS
		});
	} else {
		return res.json({
			success: false,
			message: MESSAGE.NO_DATA_AVAILABLE
		})
	}
}

CrudController.put = async (req, res, next) => {
	const { id, name, email, age, dob } = req.body;
	const data = await StudentsModel.edit(id, name, email, age, dob);
	if (data !== undefined) {
		return res.json({
			success: true,
			data: data,
			message: MESSAGE.OPERATION_SUCCESS
		});
	} else {
		return res.json({
			success: false,
			message: MESSAGE.NO_DATA_AVAILABLE
		})
	}
}

CrudController.delete = async (req, res, next) => {
	const { id } = req.body;
	const data = await StudentsModel.delete(id);
	if (data !== undefined) {
		return res.json({
			success: true,
			data: data,
			message: MESSAGE.OPERATION_SUCCESS
		});
	} else {
		return res.json({
			success: false,
			message: MESSAGE.NO_DATA_AVAILABLE
		})
	}
}

CrudController.createTable = async (req, res, next) => {
	try {
		await CrudModel.createTable();
		return res.json({
			success: true,
			message: MESSAGE.TABLE_CREATED_SUCCESSFULLY
		})
	} catch (err) {
		return res.json({
			success: false,
			message: MESSAGE.FAILED_CREATE_TABLE
		})
	}
}

CrudController.dropTable = async (req, res, next) => {
	try {
		await CrudModel.dropTable();
		return res.json({
			success: true,
			message: MESSAGE.TABLE_DROPPED_SUCCESSFULLY
		});
	} catch (err) {
		return res.json({
			success: false,
			message: MESSAGE.FAILED_DROP_TABLE
		});
	}
}

module.exports = CrudController;