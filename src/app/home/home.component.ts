import {Component, OnInit} from '@angular/core';
import {Demande, DemandeService} from '../_webservices/demande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keyword = '';
  demandes: Demande[] = [];

  constructor(private demandeService: DemandeService) {
  }

  ngOnInit() {
  }

  search() {
    this.demandeService.getDemandes({
      keyword: this.keyword
    }, {}).subscribe((res) => {
      this.demandes = res;
    }, (err) => {
      // silent handle
      // console.error(err);
    });
  }

}
