import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../database';

interface ShipmentAttributes {
  uuid: string;
  user_uuid: string;
  origin: string;
  destination: string;
  weight: number;
  base_price: number;
  additional_charge: number;
  total_price: number;
  status_uuid: string;
}

interface ShipmentCreationAttributes extends Optional<ShipmentAttributes, 'uuid'> {}

class ShipmentModel extends Model<ShipmentAttributes, ShipmentCreationAttributes> implements ShipmentAttributes {
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

ShipmentModel.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_uuid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  origin: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  destination: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  base_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  additional_charge: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status_uuid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'db_sents.shipments',
  timestamps: false,
});

export default ShipmentModel;
