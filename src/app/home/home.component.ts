import {Component, OnInit} from '@angular/core';
import {Demande} from '../_webservices/demande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  demandes: Demande[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  search() {

  }

}
