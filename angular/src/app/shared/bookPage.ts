import { Book } from "./book";

export class BookPage {
    content: Book[];
    pageable: {
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: false;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean
    };
    numberOfElements: 1;
    first: false;
    empty: false;
}