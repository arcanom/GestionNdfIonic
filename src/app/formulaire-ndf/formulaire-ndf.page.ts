import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ndfrequest } from '../model/ndfrequest';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-formulaire-ndf',
  templateUrl: './formulaire-ndf.page.html',
  styleUrls: ['./formulaire-ndf.page.scss'],
})
export class FormulaireNdfPage implements OnInit {

  constructor(private route: Router, private httpService : HttpserviceService ) { }

  categories :  any
  myFiles : any[] =[]
  ndf :  Ndfrequest
  id: any
  idNdf : number
  idEmployee : any
  data : any
  formData : any
  userdetails : any
  role: any
  ngOnInit() {
    this.userdetails = JSON.parse(sessionStorage.getItem("userdetails"))
    this.role =  localStorage.getItem("role")
    console.log(this.role)
    this.idEmployee =  localStorage.getItem("id")
    this.getCategories()
  }

  getCategories(){
    this.httpService.getAllCategories().subscribe(x=>{
      this.categories =  x;
      console.log(this.categories)
    })
  }

  onClick(){
    sessionStorage.clear()
    localStorage.clear()
    this.route.navigate(['/connexion'])

}

onFileChange(event: any){
  for( let i=0; i < event.target.files.length;i++){
    this.myFiles.push(event.target.files[i])
  }
}

  onSubmit(form : NgForm){
      if(form.valid){
          this.ndf = {
            title : form.value.titre,
            description: form.value.description,
            amount: form.value.montant,
            date : form.value.date,
            status: "INPROGRESS",
            admin:0,
            employee: this.idEmployee,
            category : form.value.categorie
          }
          // console.log(this.ndf)
          this.httpService.createNdF(this.ndf).subscribe(x=> {
            this.data = x
            this.id = this.data.id
            localStorage.setItem("idNdf",this.id)

          })

          this.idNdf = JSON.parse(localStorage.getItem("idNdf"))
          for(let i=0;i< this.myFiles.length;i++ ){
            console.log(this.myFiles[i])
            this.formData = new FormData()
            this.formData.append("file",this.myFiles[i])
            this.httpService.createUpload(this.formData,this.idNdf).subscribe({
              next : (y) =>{
                console.log(y)
              },
              error:(err) =>  console.log(err.message)
            })
            this.formData = 0
          }
      }
      this.myFiles = []
      this.route.navigate(['/mesndf'])

  }





}
