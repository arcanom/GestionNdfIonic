import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeerequest } from '../model/employeerequest';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-inscription-employee',
  templateUrl: './inscription-employee.page.html',
  styleUrls: ['./inscription-employee.page.scss'],
})
export class InscriptionEmployeePage implements OnInit {
  employee : Employeerequest
  onClick(){
    sessionStorage.clear()
    localStorage.clear()
    this.route.navigate(['/connexion'])
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.employee = {
        lastName: form.value.lastname,
        firstName: form.value.firstname,
        password: form.value.password
      }
      this.httpService.createEmploye(this.employee).subscribe(x=>{
        console.log(x)
      })

    }

     this.route.navigate(['/mesndf'])
  }

  constructor(private route : Router, private httpService: HttpserviceService) { }

  ngOnInit() {
  }

}
