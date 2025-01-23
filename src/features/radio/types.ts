export type RadioItem = {
  collectionId: string;
  collectionName: string;
  id: string;
  name: string;
  url: string;
  country: string;
  description: string;
  created: string;
  updated: string;
};
export type RadioList = {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: RadioItem[];
};
