import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-mesndf',
  templateUrl: './mesndf.page.html',
  styleUrls: ['./mesndf.page.scss'],
})
export class MesndfPage implements OnInit {
  role : any
  userdetails: any
  user : any
  data : any
  id:  any
  ndfs: any
  constructor(private route: Router, private httpService : HttpserviceService) { }

  ngOnInit() {
    this.userdetails = JSON.parse(sessionStorage.getItem("userdetails"))
    this.user =  this.userdetails.username
    this.httpService.getEmployeByUsername(this.user).subscribe(x=> {
      this.data = x
      this.id = this.data.id
      this.role = this.data.authorities
      localStorage.setItem("role",this.role)
      localStorage.setItem("id",this.id)
      this.httpService.getNdfByEmployeeId(this.id).subscribe(x => {
        this.ndfs = x
      })
    })
  }

  toDetails(id:number){
    this.route.navigate(['/details-ndf/'+id])
  }

  onClick(){
    sessionStorage.clear()
    localStorage.clear()
    this.route.navigate(['/connexion'])
  }

}
