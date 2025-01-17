import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../config/database"

// Define interface for PostOffice
interface PostOfficeAttributes {
  id: string;
  state_id: number;
  district_id: number;
  pin_code: string;
  post_office_name: string;
  post_office_type: string;
}

interface PostOfficeCreationAttributes extends Optional<PostOfficeAttributes, 'id'> {}

// Define PostOffice model
class PostOffice extends Model<PostOfficeAttributes, PostOfficeCreationAttributes> implements PostOfficeAttributes {
  public id!: string;
  public state_id!: number;
  public district_id!: number;
  public pin_code!: string;
  public post_office_name!: string;
  public post_office_type!: string;
}

PostOffice.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pin_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_office_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_office_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'post_offices',
    timestamps: false,
  }
);

export default PostOffice;
