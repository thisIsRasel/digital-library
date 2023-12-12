export interface Book {
    id: number;
    title: string;
    author: string;
    publication_year: number;
    summary: string;
    created_at?: Date;
    updated_at?: Date;
}