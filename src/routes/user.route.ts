import {FastifyInstance} from "fastify";
import fp from "fastify-plugin";
import * as memory from "../resources/memory.repository"
import {User} from "../resources/user/user.model";


// users
/**
 * A wrapper to add routes to an instance of Fastify
 * @param app an instance of Fastyfy
 * @returns void
 */
async function userRoutes(app: FastifyInstance) {

    app.get("/users", async (req) => {
        const users = memory.getAllUsers();
        const resultingUsersNoPassword = []
        req.log.info(req.id, req.params)
        for (let i = 0; i < users.length; i += 1) {
            const user: User = users[i];
            const tempUser = {...user}
            tempUser.password = undefined
            resultingUsersNoPassword.push(tempUser)
        }
        return resultingUsersNoPassword
    });
    app.get<{
        Params: {
            id: string
        }
    }>("/users/:id", async (req, res) => {
        const user: User | false = memory.getUserById(req.params.id);
        if (!user) {
            res.statusCode = 404
            return false
        }
        req.log.info(req.id, req.params)

        const resultingUserNoPassword = {...user}
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });
    app.post<{
        Body: {
            name: string,
            login: string,
            password: string,
        }
    }>("/users", async (req, res) => {
        const {
            name,
            login,
            password,
        } = (req.body)

        const user = memory.createNewUser(name, login, password);
        if (user !== undefined) {
            res.statusCode = 201
        }
        req.log.info(req.id, req.params)

        const resultingUserNoPassword = {...user}
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });
    app.delete<{ Params: { id: string } }>("/users/:id", async (req, res) => {
        const result = memory.deleteUserById(req.params.id);
        req.log.info(req.id, req.params)

        if (!result) res.statusCode = 204
        return true
    });
    app.put<{
        Body: {
            id: string,
            name: string,
            login: string,
            password: string
        }
    }>("/users/:id", async (req, res) => {
        const {
            id,
            name,
            login,
            password,
        } = (req.body);

        const user = memory.updateUserById(id, name, login, password);
        if (!user) {
            res.statusCode = 200
        }
        req.log.info(req.id, req.params)

        const resultingUserNoPassword = {...user}
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });

}

export default fp(userRoutes)