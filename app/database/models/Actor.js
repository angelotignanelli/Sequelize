module.exports = function(sequelize, dataTypes) {
    let alias = "Actor";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequelize.define(alias, cols, config);

    //Asocio la tabla actores con la tabla peliculas para que en peliculas me traiga los campos de la columna actor_id
    //Al ser muchos a muchos se usa el belongsToMany (muchos acotes pueden estar en muchas peliculas)
    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        });
    }

    return Actor;
}