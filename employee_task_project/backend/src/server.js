require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const employeeRoutes = require('./routes/employeeRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.json({ status: 'ok', message: 'Employee Task API' }));

const PORT = process.env.PORT || 4000;
async function start() {
  await sequelize.authenticate();
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}
start().catch(err => { console.error(err); process.exit(1); });
