import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique-ndf',
  templateUrl: './historique-ndf.page.html',
  styleUrls: ['./historique-ndf.page.scss'],
})
export class HistoriqueNdfPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigate(['/connexion'])

  }

}
