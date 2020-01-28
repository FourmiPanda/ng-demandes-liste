import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent implements OnInit {

  @Input() demande;

  constructor() {
  }

  ngOnInit() {
  }

}
