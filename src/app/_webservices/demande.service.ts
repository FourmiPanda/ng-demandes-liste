import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) {
  }


  /**
   * Retourne les demandes
   */
  getDemandes(criteria, page) {

  }

}
