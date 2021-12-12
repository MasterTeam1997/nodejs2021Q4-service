const memory = require('../resources/memory.repository');

// boards
function boardRoutes(app, options, done) {
    app.get("/boards", () => {
        const boards = memory.getAllBoards();
        return boards
    });
    app.get("/boards/:id", (req, res) => {
        const board = memory.getBoardById(req.params.id);
        if (!board) {
            res.statusCode = 404;
            return false
        }
        return board
    });
    app.post("/boards", (req, res) => {
        const {
            title
        } = req.body
        const {
            columns
        } = req.body
        const board = memory.createNewBoard(title, columns);
        if (board !== undefined) res.statusCode = 201
        return board
    });
    app.delete("/boards/:id", (req, res) => {
        const result = memory.deleteBoardById(req.params.id);
        if (!result) {
            res.statusCode = 404
            return false
        }
        return true
    });
    app.put("/boards/:id", (req, res) => {
        const {
            id
        } = req.params;
        const {
            title
        } = req.body
        const {
            columns
        } = req.body
        const board = memory.updateBoardById(id, title, columns);
        if (!board) {
            res.statusCode = 404
            return false
        }
        return board
    });
    done();
}

module.exports = boardRoutes
