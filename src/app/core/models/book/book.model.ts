export interface BookModel {
  id?;
  title: string;
  author: string;
  price: string;
  downloads: number;
  year: number;
  imageUrl: string;
}

export interface BookDetailModel {
  id: 1;
  categoryName: string;
  title: string;
  author: string;
  price: string;
  downloads: number;
  isbn10: number;
  isbn13: number;
  year: number;
  pages: number;
  edition: number;
  language: string;
  extension: string;
  size: string;
  imageUserUrl: string;
  imageUrl: string;
  imageDetailUrl: string;
  detail: string;
  detailBookData: string
}
