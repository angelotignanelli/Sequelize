module.exports = (sequelize,DataTypes) => {
    const Genero = sequelize.define("Genero",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: "genres",
        timestamps: false
    });

    //Asocio la tabla genero con la tabla peliculas para que en peliculas me traiga los campos de la columna genre_id
    //Al ser uno a muchos se usa el hasMany (un genero tiene muchas peliculas)
    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }

    return Genero;
}