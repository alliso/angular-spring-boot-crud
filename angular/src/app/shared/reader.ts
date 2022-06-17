import { Book } from '../shared/book';

export class Reader {
    id: number;
    firstName: string;
    lastName: string;
    linkedBooks: Book[];
}