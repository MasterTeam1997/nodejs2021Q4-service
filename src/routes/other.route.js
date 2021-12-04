const memory = require('../resources/memory.repository');


function otherRoutes(app, options, done) {
    app.post("/columns", (req) => {
        const {
            title
        } = req.body
        const {
            boardId
        } = req.body
        const board = memory.getBoardById(boardId);
        const column = memory.createNewColumn(title);
        board.addColumn(column.id)
        return column
    });

    app.get("/columns", () => {
        const columns = memory.getAllColumns();
        return columns
    });

    app.get("/all", () => {
        const all = memory.getAll();
        return JSON.stringify(all, null, 4)
    });
    app.get("/taskslen", () => {
        const all = memory.getAll();
        return all.tasks.length
    });

    done();
}

module.exports = otherRoutes