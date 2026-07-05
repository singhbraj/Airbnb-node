import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../sequelize";


class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>>{

    declare id: CreationOptional<number>;
    declare name: string;
    declare address:string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating: number;
    declare rating_count: number;
}


Hotel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2),
        defaultValue: null,
    },
    rating_count: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
},{
    sequelize,
    tableName: "hotels",
    underscored: true, // createdAt --> created_at
    timestamps:true,   // createdAt, updatedAt
})

export default Hotel;