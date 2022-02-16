import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../shared/models/product";
import { ProductService } from "../../../../shared/services/product.service";
import { ToastrService } from "src/app/shared/services/toastr.service";
import { Helpers } from "../../../../shared/utils/helpers";
import { FilterProductSearch } from "../../../../shared/interfaces/product";
import { PaginationMeta } from "../../../../shared/interfaces/pagination";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  loading: boolean = false;
  filter: FilterProductSearch = {
    page: 1, limit: 12,
    id: null,
    search: null
  };
  config: PaginationMeta;

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(page?: number) {
    this.loading = true;
    this.productList = [];

    this.filter = Helpers.removeEmpty(this.filter);
    this.filter.page = page ? page : 1;

    this.productService.search(this.filter).then(
      (response: any) => {

        let {items, meta} = response.data;

        this.loading = false;
        items.map((element) => {
          this.productList.push(element as Product);
        });

        this.changeConfig(meta);

        const thereAreProductsWithDiscount = items.filter((x: Product) => x.has_discount == true).length;

        if(thereAreProductsWithDiscount)
          this.toastrService.info("There are products with discounts", "");
      },
      (err) => {
        this.toastrService.error("Error while fetching Products", err);
      }
    );
  }

  changeConfig(meta) {
    this.config = {
      itemsPerPage: meta.items_per_page,
      currentPage: meta.current_page,
      totalItems: meta.total_items,
      totalPages: meta.total_pages,
    };
  }

  pageChanged(e) {
    this.config.currentPage = e;
    this.getData(e);
  }

  clearFilters() {
    this.filter.id = null;
    this.filter.search = null;
    this.getData();
  }
}
