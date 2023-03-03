import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traitement-ndf',
  templateUrl: './traitement-ndf.page.html',
  styleUrls: ['./traitement-ndf.page.scss'],
})
export class TraitementNdfPage implements OnInit {

  constructor(private route :  Router) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigate(['/connexion'])
  }



}
