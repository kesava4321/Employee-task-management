const { sequelize } = require('../models');

async function migrate() {
  await sequelize.sync({ alter: true });
  console.log('Migrations complete');
  process.exit(0);
}
migrate().catch(err => { console.error(err); process.exit(1); });
