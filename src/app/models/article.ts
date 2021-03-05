import { Author } from './author';
import { Tag } from './tag';

export interface Article {
    id: string;
    title: string;
    describle?: string;
    url: string;
    cover?: string;
    createDate: string | number;
    author: Author;
    tags?: Tag[];
}
