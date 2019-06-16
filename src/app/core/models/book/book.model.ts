export interface BookModel {
  id?;
  category: string;
  title: string;
  author: string;
  price: number;
  downloads: number;
  year: number;
  imageUrl: string;
  dateOrder: string;
  extension: string;
  size: string;
  detail: string;
  rate: number;
}

export interface BookDetailModel {
  id: 1;
  categoryName: string;
  title: string;
  author: string;
  price: number;
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
  detailBookData: string;
}
