import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-employee',
  templateUrl: './inscription-employee.page.html',
  styleUrls: ['./inscription-employee.page.scss'],
})
export class InscriptionEmployeePage implements OnInit {
  onClick(){
    this.route.navigate(['/connexion'])
  }

  onSubmit(form: NgForm){
    this.route.navigate(['/mesndf'])
  }

  constructor(private route : Router) { }

  ngOnInit() {
  }

}
