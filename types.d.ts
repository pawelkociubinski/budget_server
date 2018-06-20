/* tslint:disable */

export interface Query {
  books?: Book[] | null;
}

export interface Book {
  title: string;
  author: string;
}
