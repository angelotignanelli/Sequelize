module.exports = (sequelize,DataTypes) => {
    const Pelicula = sequelize.define("Pelicula",
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
    },
    
    {
        tableName: "movies",
        timestamps: false
    });

    //Asocio la tabla peliculas con la tabla genero para que me traiga los campos de la columna genre_id
    //Al ser uno a uno se usa el belongsTo (una pelicula tiene un genero)
    Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        });

    //Asocio la tabla peliculas con la tabla actores para que me traiga los campos de la columna actor_id
    //Al ser muchos a muchos se usa el belongsToMany (muchos actores pueden estar en muchas peliculas)
        Pelicula.belongsToMany(models.Actor, {
                as: "actores",
                through: "actor_movie",
                foreignKey: "movie_id",
                otherKey: "actor_id",
                timestamps: false
        });
        }

    return Pelicula;
}