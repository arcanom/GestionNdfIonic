import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesndf',
  templateUrl: './mesndf.page.html',
  styleUrls: ['./mesndf.page.scss'],
})
export class MesndfPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigate(['/connexion'])
  }

}
