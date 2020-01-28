import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  constructor(private http: HttpClient) {
  }

  /**
   * Retourne les demandes
   */
  getDemandes(criteria, page): Observable<Demande[]> {
    let url = environment.api.url + '/mission?';
    if (criteria.start_date) {
      url += '&start_date=' + criteria.start_date;
    }
    if (criteria.keyword) {
      url += '&keyword=' + criteria.keyword;
    }
    if (page.limit) {
      url += '&limit=' + page.limit;
    }
    if (page.skip) {
      url += '&skip=' + page.skip;
    }
    if (page.sort) {
      url += '&sort=' + page.sort;
    }
    return this.http.get<Demande[]>(url);
  }
}

export class Demande {
  id: string;
  texte: string;
  date: string;
  payload: {
    adresse: {
      numVoie: string;
      nomVoie: string;
      cp: string;
      ville: string;
      pays: string;
    };
  };
  demandeur: {
    email: string;
  };
  type: {
    href: string;
    title: string;
  };
}
