// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components

import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  exports: [],
})
export class ProductModule {}
