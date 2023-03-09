import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-detailsndf',
  templateUrl: './detailsndf.page.html',
  styleUrls: ['./detailsndf.page.scss'],
})
export class DetailsndfPage implements OnInit {
  id : any
  ndf :  any

  title : any
  date: any
  amount: any
  description: any
  proofs: any
  category: any
  status:any
  imgs : any
  idEmployee: any
  nameEmploye: any
  nameEmployeFirstname: any
  nameEmployeLastname: any
  idAdmin: any
  nameAdmin : any
  nameAdminFirstname: any
  nameAdminLastname: any
  constructor(private activatedRoute : ActivatedRoute, private  httpService: HttpserviceService) {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getNdfById(this.id)
  }

  ngOnInit() {

  }

  getNdfById(id:number){
    this.httpService.getNdfById(this.id).subscribe(x=> {
      this.ndf = x
      console.log(this.ndf)
      this.title = this.ndf.title
      this.date = this.ndf.date
      this.amount = this.ndf.amount
      this.description = this.ndf.description
      this.proofs =  this.ndf.proofs
      this.category = this.ndf.category.name
      this.status = this.ndf.status
      this.imgs = this.ndf.proofs
      localStorage.setItem("idEmployee",this.ndf.employee)
      localStorage.setItem("idAdmin",this.ndf.admin)

    })
    this.idEmployee = localStorage.getItem("idEmployee")
    this.idAdmin = localStorage.getItem("idAdmin")

    this.httpService.getEmployeeById(this.idEmployee).subscribe(x=>{
      this.nameEmploye =  x;
      this.nameEmployeFirstname = this.nameEmploye.firstName
      this.nameEmployeLastname = this.nameEmploye.lastName
    })

    this.httpService.getEmployeeById(this.idAdmin).subscribe(x=>{
      this.nameAdmin =  x;
      this.nameAdminFirstname = this.nameAdmin.firstName
      this.nameAdminLastname = this.nameAdmin.lastName

    })
  }

}
