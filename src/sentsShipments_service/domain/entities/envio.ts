import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../database/database';
import { v4 as uuidv4 } from 'uuid';

class Envio extends Model {
  public uuid!: string;
  public user_uuid!: string;
  public origin!: string;
  public destination!: string;
  public weight!: number;
  public base_price!: number;
  public additional_charge!: number;
  public total_price!: number;
  public status_uuid!: string;
}

Envio.init(
  {
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    user_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    base_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    additional_charge: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'db_sents.shipments',
  }
);

export { Envio };
