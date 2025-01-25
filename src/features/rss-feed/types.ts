export type RSSItem = {
  collectionId: string;
  collectionName: string;
  id: string;
  name: string;
  url: string;
  user: string;
  cover_image: string;
  description: string;
  created: string;
  updated: string;
};
export type RSSList = {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: RSSItem[];
};
