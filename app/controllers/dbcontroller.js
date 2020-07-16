const db = require("../database/models");
const sequelize = db.sequelize;

const controller = {

    list: (req, res) => {
        db.Pelicula.findAll()
          .then((peliculas) => {
            res.render("listado",
            {peliculas: peliculas});
            });
    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
          .then((peliculas) => {
            res.render("detalle",
            {peliculas: peliculas});
            });
    },
    new: (req, res) => {
        db.Pelicula.findAll({
            limit: 5,
            order: [
                ["release_date", "DESC"],
            ],
        })
          .then((peliculas) => {
            res.render("new",
            {peliculas: peliculas});
            });
    },
    rec: (req, res) => {
        db.Pelicula.findAll({
            where:{
                rating: {[db.Sequelize.Op.gte] : 8 }
            },
        })
          .then((peliculas) => {
            res.render("rating",
            {peliculas: peliculas});
            });
    },
    search: (req, res) => {
        db.Pelicula.findAll({
            where:{
                title: req.body
            },
        })
          .then((peliculas) => {
            res.render("search",
            {peliculas: peliculas});
            });
    }

}

module.exports = controller;