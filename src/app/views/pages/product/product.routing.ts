import { ProductListComponent } from "./product-list/product-list.component";
import { Routes } from "@angular/router";


export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: ProductListComponent,
      },
    ],
  },
];
