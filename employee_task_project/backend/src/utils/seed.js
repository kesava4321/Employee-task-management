const { Employee, Task, sequelize } = require('../models');

async function seed() {
  await sequelize.sync({ force: true });
  const e1 = await Employee.create({ name: 'Alice Kumar', email: 'alice@example.com', position: 'Developer' });
  const e2 = await Employee.create({ name: 'Ravi Rao', email: 'ravi@example.com', position: 'QA' });
  await Task.bulkCreate([
    { title: 'Implement login', description: 'Add auth system', status: 'in-progress', employeeId: e1.id },
    { title: 'Write tests', description: 'Unit tests for API', status: 'todo', employeeId: e2.id },
    { title: 'Deploy demo', description: 'Deploy to Render', status: 'todo' }
  ]);
  console.log('Seed complete');
  process.exit(0);
}
seed().catch(err => { console.error(err); process.exit(1); });
