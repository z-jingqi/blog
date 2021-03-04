import { Author } from "./author";
import { Tag } from "./tag";

export interface Article {
    title: string;
    describle: string;
    url: string;
    createDate: string | number;
    author: Author;
    tags: Tag[];
}
