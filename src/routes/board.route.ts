import {FastifyInstance} from "fastify";
import fp from "fastify-plugin";
import * as memory from '../resources/memory.repository'
import {Column} from "../resources/board/column.model";

// boards
/**
 * A wrapper to add routes to an instance of Fastify
 * @param app an instance of Fastyfy
 * @returns void
 */
async function boardRoutes(app: FastifyInstance) {
    app.get('/boards', async (req) => {
        const boards = memory.getAllBoards()
        req.log.info(req.id, req.params)
        return boards
    });
    app.get<{ Params: { id: string } }>('/boards/:id', async (req, res) => {
        const board = memory.getBoardById(req.params.id);
        req.log.info(req.id, req.params)

        if (!board) {
            res.statusCode = 404;
            return false;
        }
        return board;
    });
    app.post<{ Body: { title: string, columns: Column[] } }>('/boards', async (req, res) => {
        const {title, columns} = req.body;
        const board = memory.createNewBoard(title, columns);
        req.log.info(req.id, req.params)

        if (board !== undefined) res.statusCode = 201;
        return board;
    });
    app.delete<{ Params: { id: string } }>('/boards/:id', async (req, res) => {
        const result = memory.deleteBoardById(req.params.id);
        req.log.info(req.id, req.params)

        if (!result) {
            res.statusCode = 404;
            return false;
        }
        return true;
    });
    app.put<{ Params: { id: string }, Body: { title: string, columns: Column[] } }>('/boards/:id', async (req, res) => {
        const {id} = req.params;
        const {title, columns} = req.body;
        const board = memory.updateBoardById(id, title, columns);
        req.log.info(req.id, req.params)

        if (!board) {
            res.statusCode = 404;
            return false;
        }
        return board;
    });
    
}

export default fp(boardRoutes);
