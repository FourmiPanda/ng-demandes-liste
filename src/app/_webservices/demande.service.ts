import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }


  /**
   * Retourne les demandes
   */
  getDemandes(criteria, page): Observable<any> {
    //let url = environment.api.camka.url + '/contact';
    //if (criteria.keyword) {
    //  url += '?keyword=' + criteria.keyword;
    //}
    //return this.http.get<Results>(url, {withCredentials: true}).map((res) => res);
  }

}
