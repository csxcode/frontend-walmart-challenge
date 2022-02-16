import { Routes } from "@angular/router";
import { ProductListComponent } from "../../pages/product/product-list/product-list.component";

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ProductListComponent,
      }
    ],
  },
];
