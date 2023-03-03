import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-ndf',
  templateUrl: './formulaire-ndf.page.html',
  styleUrls: ['./formulaire-ndf.page.scss'],
})
export class FormulaireNdfPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

  }

  onClick(){

      this.route.navigate(['/connexion'])

  }
}
