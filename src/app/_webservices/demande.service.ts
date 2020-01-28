import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DemandeService {
  constructor(private http: HttpClient) {}

  /**
   * Retourne les demandes
   */
  getDemandes(criteria, page): Observable<Demande[]> {
    return this.http.get<Demande[]>(environment.api.url);
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
