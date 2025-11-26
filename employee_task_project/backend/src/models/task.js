const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('todo','in-progress','done'), defaultValue: 'todo' },
    dueDate: { type: DataTypes.DATE, allowNull: true },
    employeeId: { type: DataTypes.INTEGER, allowNull: true }
  }, {});
};
