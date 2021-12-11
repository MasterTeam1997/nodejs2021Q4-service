import {User}  from './user/user.model';
import {Board} from './board/board.model';
import {Column} from './board/column.model';
import {Task} from "./task/task.model";

const usersArr: User[] = [];
const boardsArr: Board[] = [];
const tasksArr: Task[] = [];

// This file contains so much file because in next updatest all of this
// is gonna be replaced with accessing to a real database
//

// utils
function deleteTasksByBoardId(boardId: string): void {
  for (let i = tasksArr.length - 1; i >= 0; i -= 1) {
    const task = tasksArr[i];
    if (task.boardId === boardId) {
      if (tasksArr.length === 1) {
        tasksArr.splice(-1);
      } else {
        tasksArr.splice(i, 1);
      }
    }
  }
}

function nullifyTasksByUserId(userId: string): boolean {
  for (let i = 0; i < tasksArr.length; i += 1) {
    const task = tasksArr[i];
    if (task.userId === userId) {
      task.userId = null;
    }
  }
  return true;
}

function getAll(): object {
  return {
    users: usersArr,
    boards: boardsArr,
    tasks: tasksArr,
  };
}

// users todo deletion
function getAllUsers(): User[] {
  return usersArr;
}

function getUserById(id: string): User | false {
  for (let i = 0; i < usersArr.length; i += 1) {
    const user = usersArr[i];
    if (user.id === id) {
      return user;
    }
  }
  return false;
}

function createNewUser(name: string, login: string, password: string): User {
  const user = new User(name, login, password);
  usersArr.push(user);
  return user;
}

function deleteUserById(id: string): boolean {
  for (let i = 0; i < usersArr.length; i += 1) {
    const user = usersArr[i];
    if (user.id === id) {
      nullifyTasksByUserId(id);
      if (usersArr.length === 1) {
        usersArr.splice(-1);
      } else if (usersArr.length > 0) {
        usersArr.splice(i, 1);
      }
      return true;
    }
  }
  return false;
}

function updateUserById(
  id: string,
  name: string,
  login: string,
  password: string
): User | false {
  for (let i = 0; i < usersArr.length; i += 1) {
    const user = usersArr[i];
    if (user.id === id) {
      if (name !== undefined) user.name = name;
      if (login !== undefined) user.login = login;
      if (password !== undefined) user.password = password;
      return user;
    }
  }
  return false;
}

// boards todo deletion
function getAllBoards(): Board[] {
  return boardsArr;
}

function getBoardById(id: string): Board | boolean {
  for (let i = 0; i < boardsArr.length; i += 1) {
    const board = boardsArr[i];
    if (board.id === id) {
      return board;
    }
  }
  return false;
}

function createNewBoard(title: string, columns: Column[]): Board {
  const board = new Board(title, columns);
  boardsArr.push(board);
  return board;
}

function deleteBoardById(id: string) {

  deleteTasksByBoardId(id);
  for (let i = 0; i < boardsArr.length; i += 1) {
    const board = boardsArr[i];
    if (board.id === id) {
      deleteTasksByBoardId(id);
      if (boardsArr.length === 1) {
        boardsArr.splice(-1);
      } else if (boardsArr.length > 0) {
        boardsArr.splice(i, 1);
      }
      return true;
    }
  }
  return false;
}

function updateBoardById(
  id: string,
  title: string,
  columns: Column[]
): Board | boolean {
  for (let i = 0; i < boardsArr.length; i += 1) {
    const board = boardsArr[i];
    if (board.id === id) {
      if (title !== undefined) board.title = title;
      if (columns !== undefined) board.columns = columns;
      return board;
    }
  }
  return false;
}

function getAllTasks(boardId: string): Task[] {
  const resultArr = [];
  for (let i = 0; i < tasksArr.length; i += 1) {
    const task = tasksArr[i];
    if (task.boardId === boardId) {
      resultArr.push(task);
    }
  }
  return resultArr;
}

function getTaskById(id: string, boardId: string): Task | boolean {
  for (let i = 0; i < tasksArr.length; i += 1) {
    const task = tasksArr[i];
    if (task.id === id && task.boardId === boardId) {
      return task;
    }
  }
  return false;
}

function createNewTask(
  title: string,
  order: string,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
): Task {
  const task = new Task(title, order, description, userId, boardId, columnId);
  tasksArr.push(task);
  return task;
}

function deleteTaskById(id: string, boardId: string) {
  for (let i = 0; i < tasksArr.length; i += 1) {
    const task = tasksArr[i];
    if (task.id === id && task.boardId === boardId) {
      if (tasksArr.length === 1) {
        tasksArr.splice(-1);
      } else if (tasksArr.length > 0) {
        tasksArr.splice(i, 1);
      }
      return true;
    }
  }
  return false;
}

function updateTaskById(
  id: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
) {
  const i = tasksArr.findIndex((task) => task.id === id && task.boardId === boardId);
  const task = tasksArr[i];
  if (i !== -1) {
    if (title !== undefined) task.title = title;
    if (order !== undefined) task.order = order;
    if (description !== undefined) task.description = description;
    if (userId !== undefined) task.userId = userId;
    if (boardId !== undefined) task.boardId = boardId;
    if (columnId !== undefined) task.columnId = columnId;
    return task;
  }
  return false;
}

// older implementation.
// deprecated

// function createNewColumn(title){
//   const column = new Column(title)
//   columnsArr.push(column)
//   return column;
// }
// function getColumnById(id){
//   for (let i = 0; i < columnsArr.length; i+=1) {
//     const column = columnsArr[i];
//     if(column.id === id){
//       return column
//     }
//   }
//   return false
// }
// function getAllColumns() {
//   return columnsArr;
// };

export {
  getAllUsers,
  getUserById,
  createNewUser,
  deleteUserById,
  updateUserById,

  getAllBoards,
  getBoardById,
  createNewBoard,
  deleteBoardById,
  updateBoardById,

  getAllTasks,
  getTaskById,
  createNewTask,
  deleteTaskById,
  updateTaskById,

  getAll,
};
