const routes = require("express").Router();
const userController = require("../controller/user.controller");

// todos os usuários
routes.get("/all", userController.findAllUsers);

// apenas um usuario
routes.get("/:id", userController.findOneUser);

// editar um usuario
routes.post("/:id", userController.updateUser);

routes.post('/', userController.findUser);

// excluir um usuario
routes.delete("/:id", userController.removeUser);

module.exports = routes;
