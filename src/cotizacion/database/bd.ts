import mysql, { Pool, PoolConfig, FieldInfo } from 'mysql';
import signale from 'signale'; 

signale.config({ displayTimestamp: true });

const config: PoolConfig = {
    user: 'root',
    host: 'localhost',
    database: 'examen_prueba',
    password: '211218',
    port: 3306,
    connectionLimit: 10,
};

// Crear el pool de conexiones
const pool = mysql.createPool(config);

export async function query(sql: string, params?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.getConnection((err: mysql.MysqlError, connection) => {
            if (err) {
                signale.error(err.message);
                return reject(err);
            }

            signale.success('Conexión exitosa a la BD');

            connection.query(sql, params, (error: mysql.MysqlError | null, results?: any, fields?: FieldInfo[]) => {
                if (error) {
                    signale.error(error.message);
                    connection.release(); // Liberar la conexión en caso de error
                    return reject(error);
                }
                connection.release(); // Liberar la conexión después de la consulta
                resolve(results);
            });
        });
    });
}