import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class User extends Model {}

User.init(
    {
        // Identifiant unique de l’utilisateur
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        // Adresse mail de l’utilisateur
        email: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            // validation intégrée Sequelize
            validate: {
                isEmail: true,
            },
        },

        // Nom de famille de l’utilisateur
        lastname: {
            type: DataTypes.STRING,
            allownull: true,
        },

        // Prénom de l’utilisateur
        firstname: {
            type: DataTypes.STRING,
            allownull: true,
        },

        // Mot de passe haché
        password: {
            type: DataTypes.STRING,
            allownull: false,
        },

        // Adresse de l'utilisateur
        localisation: {
            type: DataTypes.STRING,
            allownull: true,
        },

        // Numero de telephone
        phonenumber: {
            type: DataTypes.STRING,
            allownull: true,
            // unique: true,
        },

        // Rôle de l’utilisateur(Admin/Client)
        role: {
            type: DataTypes.ENUM("client", "admin"),
            defaultValue: "client",
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "user",
        timestamps: false,
    }
);

export default User;
