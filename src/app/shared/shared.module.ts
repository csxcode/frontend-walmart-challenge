import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductService } from "./services/product.service";
import { NgxContentLoadingModule } from "ngx-content-loading";
import { CardLoaderComponent } from "./components/card-loader/card-loader.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    NgxContentLoadingModule,
  ],
  declarations: [
    PageNotFoundComponent,
    CardLoaderComponent,
  ],
  exports: [
    FormsModule,
    MDBBootstrapModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    PageNotFoundComponent,
    NgxContentLoadingModule,
    CardLoaderComponent,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
  ],
  providers: [
    ProductService,
    FormBuilder,
  ],
})
export class SharedModule {}
