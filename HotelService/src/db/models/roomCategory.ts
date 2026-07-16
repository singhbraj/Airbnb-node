import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from './sequelize';

class RoomCategory extends Model<
  InferAttributes<RoomCategory>,
  InferCreationAttributes<RoomCategory>
> {
  declare id: CreationOptional<number>;
  declare hotelId: number;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date | null>;
}

RoomCategory.init(
  {
    id: {
      type: 'INTEGER',
      autoIncrement: true,
      primaryKey: true,
    },
    hotelId: {
      type: 'INTEGER',
      allowNull: false,
      references: {
        model: 'hotels',
        key: 'id',
      },
    },
    name: {
      type: 'STRING',
      allowNull: false,
    },
    createdAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },
    updatedAt: {
      type: 'DATE',
      defaultValue: new Date(),
    },
    deletedAt: {
      type: 'DATE',
      defaultValue: null,
    },
  },
  {
    tableName: 'room_categories',
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
  }
);

export default RoomCategory;
