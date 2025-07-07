
import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUserController";
import { FindUserByIdController } from "../controllers/FindUserByIdController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const createUserController = new CreateUserController()
const listUserController = new ListUsersController()
const findByIdController = new FindUserByIdController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

export async function usersRoutes(app:FastifyInstance){
    app.post('/users', createUserController.handle)
    app.get('/users', listUserController.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
}
