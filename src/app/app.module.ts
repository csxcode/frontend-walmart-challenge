import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IndexModule } from "./views/base/index/index.module";
import { SharedModule } from "./shared/shared.module";
import { ProductModule } from "./views/pages/product/product.module";

/* to load and set en.json as the default application language */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IndexModule,
    ProductModule,
    SharedModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
