import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProductService {

  private url = `${environment.apiUrl}/products`;
  constructor(public http: HttpClient) {}


  search(params: any) {
    return this.http.get(`${this.url}/search`, { params }).toPromise();
  }
}
