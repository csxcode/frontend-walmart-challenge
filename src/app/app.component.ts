import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "./shared/animations/fadeIntRoute";
declare var $: any;

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <app-navbar></app-navbar>

      <main [@fadeAnimation]="o.isActivated ? o.activatedRoute : ''">
        <router-outlet #o="outlet"></router-outlet>
      </main>

      <!-- <app-footer></app-footer> -->
      <app-loader-spinner></app-loader-spinner>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(".banner").owlCarousel({
      autoHeight: true,
      center: true,
      nav: true,
      items: 1,
      margin: 30,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  }
}