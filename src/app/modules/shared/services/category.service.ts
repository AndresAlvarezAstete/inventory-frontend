import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


//const base_url = environment.base_url;
const base_url = "http://localhost:8080/api/v1";

/*const base_url = {
  String: environment.production
};*/


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  /**
   * 
   * Get all categories
   */
  getCategories() {

    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint);
    
  }
}
