import { v4 as uuid } from 'uuid';
import {Column} from './column.model';

export class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor(title: string, columns: Column[]) {
    this.id = uuid();
    this.title = title;
    this.columns = columns;
  }
}
