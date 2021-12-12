const memory = require('../resources/memory.repository');

// tasks
function taskRoutes(app, options, done) {
    app.get("/boards/:boardId/tasks", (req) => {
        const {
            boardId
        } = req.params;
        const tasks = memory.getAllTasks(boardId);
        return tasks
    });
    app.get("/boards/:boardId/tasks/:id", (req, res) => {
        const task = memory.getTaskById(req.params.id, req.params.boardId);
        if (!task) {
            res.statusCode = 404;
            return false
        }
        return task
    });
    app.post("/boards/:boardId/tasks", (req, res) => {
        const {
            title
        } = req.body
        const {
            order
        } = req.body
        const {
            description
        } = req.body
        const {
            userId
        } = req.body
        const {
            boardId
        } = req.params
        const {
            columnId
        } = req.body
        const task = memory.createNewTask(title, order, description, userId, boardId, columnId);
        if (task !== undefined) res.statusCode = 201
        return task
    });
    app.delete("/boards/:boardId/tasks/:id", (req, res) => {
        const result = memory.deleteTaskById(req.params.id, req.params.boardId);
        if (!result) {
            res.statusCode = 404
            return false
        }
        return true
    });
    app.put("/boards/:boardId/tasks/:id", (req, res) => {
        const {
            id
        } = req.params;
        const {
            title
        } = req.body
        const {
            order
        } = req.body
        const {
            description
        } = req.body
        const {
            userId
        } = req.body
        const {
            boardId
        } = req.body
        const {
            columnId
        } = req.body
        const task = memory.updateTaskById(id, title, order, description, userId, boardId, columnId);
        if (!task) {
            res.statusCode = 404
            return false
        }
        return task
    });

    done();
}

module.exports = taskRoutes