import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-traitement-ndf',
  templateUrl: './traitement-ndf.page.html',
  styleUrls: ['./traitement-ndf.page.scss'],
})
export class TraitementNdfPage implements OnInit {

  constructor(private route :  Router, private httpService : HttpserviceService) { }

  ndfs : any
  status : any

  ngOnInit() {
    this.getAllNdf()
  }

  getAllNdf(){
    this.httpService.getAllNdf().subscribe(x => {
      this.ndfs = x
      console.log(this.ndfs)
    })
  }

  updateStatusToValidated(id:number){
    this.status = {
      status: "VALIDATED"
    }

    this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
      console.log(x)
    })
    window.location.reload();
  }


  updateStatusToRefused(id:number){
    this.status = {
      status: "REFUSED"
    }

    this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
      console.log(x)
    })
    window.location.reload();
  }


  updateStatusToPaid(id:number){
    this.status = {
      status: "PAID"
    }

    this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
      console.log(x)
    })
    window.location.reload();
  }

  onClick(){
    sessionStorage.clear()
    localStorage.clear()
    this.route.navigate(['/connexion'])
  }

toDetails(id:number){
  this.route.navigate(['/details-ndf/'+id])
}

}
