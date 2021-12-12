const memory = require('../resources/memory.repository');

function getClone(orig) {
    const clone = Object.assign(Object.create(Object.getPrototypeOf(orig)), orig)
    return clone
}

// users
function userRoutes(app, options, done) {

    app.get("/users", () => {
        const users = memory.getAllUsers();
        const resultingUsersNoPassword = []
        for (let i = 0; i < users.length; i += 1) {
            const user = users[i];
            const tempUser = getClone(user)
            tempUser.password = undefined
            resultingUsersNoPassword.push(tempUser)
        }
        return resultingUsersNoPassword
    });
    app.get("/users/:id", (req, res) => {
        const user = memory.getUserById(req.params.id);
        if (!user) {
            res.statusCode = 404
            return false
        }
        const resultingUserNoPassword = getClone(user)
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });
    app.post("/users", (req, res) => {
        const {
            name
        } = req.body
        const {
            login
        } = req.body
        const {
            password
        } = req.body
        const user = memory.createNewUser(name, login, password);
        if (user !== undefined) {
            res.statusCode = 201
        }
        const resultingUserNoPassword = getClone(user)
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });
    app.delete("/users/:id", (req, res) => {
        const result = memory.deleteUserById(req.params.id);
        if (!result) res.statusCode = 204
        return true
    });
    app.put("/users/:id", (req, res) => {
        const {
            id
        } = req.params;
        const {
            name
        } = req.body
        const {
            login
        } = req.body
        const {
            password
        } = req.body
        const user = memory.updateUserById(id, name, login, password);
        if (user !== undefined) {
            res.statusCode = 200
        }
        const resultingUserNoPassword = getClone(user)
        resultingUserNoPassword.password = undefined
        return resultingUserNoPassword
    });
    done();
}
module.exports = userRoutes
