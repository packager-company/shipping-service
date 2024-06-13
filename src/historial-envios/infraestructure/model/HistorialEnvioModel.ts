// En algún lugar de tu código, probablemente en un archivo models/historialEnvioModel.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../databese/database';

class HistorialEnvioModel extends Model {
  public numeroEnvio!: string;
  public fechaEnvio!: Date;
  public direccionOrigen!: string;
  public direccionDestino!: string;
  public pesoPaquete!: number;
  public tipoEnvio!: string;
  public estadoEnvio!: string;
  public costoTotal!: number;
}

HistorialEnvioModel.init(
  {
    numeroEnvio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaEnvio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    direccionOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccionDestino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pesoPaquete: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tipoEnvio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estadoEnvio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costoTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'HistorialEnvio',
    tableName: 'historial_envios', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no necesitas timestamps createdAt y updatedAt
  }
);

export { HistorialEnvioModel };
