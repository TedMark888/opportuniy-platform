const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const app = express();
require('dotenv').config();

//connect database
connectDB();

//sync database
sequelize.sync({ force: false })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));

//init middleware
app.use(express.json());

//Define routes
app.use('/api/employers', require('./routes/employer'));
app.use('/api/jobs', require('./routes/job'));
app.use('/api/candidates', require('./routes/candidate'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

const candidateRoutes = require('./routes/candidate');
app.use('/api/candidate', candidateRoutes);
