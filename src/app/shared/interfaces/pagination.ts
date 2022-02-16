export class PaginationLimit {
  page: number = 1;
  limit: number = 12;
}

export class PaginationMeta {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  totalPages: number;
}
