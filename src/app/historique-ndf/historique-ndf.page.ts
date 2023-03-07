import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-historique-ndf',
  templateUrl: './historique-ndf.page.html',
  styleUrls: ['./historique-ndf.page.scss'],
})
export class HistoriqueNdfPage implements OnInit {

  constructor(private route : Router, private httpService : HttpserviceService) { }


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

  toDetails(id:number){
    this.route.navigate(['/details-ndf/'+id])
  }

  onClick(){
    this.route.navigate(['/connexion'])

  }

}
