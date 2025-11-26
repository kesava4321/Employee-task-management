const { Sequelize } = require('sequelize');
const EmployeeModel = require('./employee');
const TaskModel = require('./task');

const dbUrl = process.env.DATABASE_URL || 'sqlite:./data/dev.sqlite';
const sequelize = new Sequelize(dbUrl, { logging: false });

const Employee = EmployeeModel(sequelize);
const Task = TaskModel(sequelize);

Employee.hasMany(Task, { foreignKey: 'employeeId', as: 'tasks', onDelete: 'SET NULL' });
Task.belongsTo(Employee, { foreignKey: 'employeeId', as: 'employee' });

module.exports = { sequelize, Employee, Task };
