//aqui se manejara la base de datos

const sql = require('mssql');

const dbConfig = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'localhost',
  database: 'tu_base_de_datos'
};

const db = new sql.ConnectionPool(dbConfig);

db.connect().then((pool) => {
  console.log('Conectado a la base de datos');
  // Ahora puedes utilizar la variable pool para interactuar con la base de datos
}).catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});