const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'AFinder Contacts API',
    description: 'Contacts API',
  },
  host: 'https://cse341adam.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

