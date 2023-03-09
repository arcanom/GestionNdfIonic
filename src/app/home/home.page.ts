import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Employeelogin } from '../model/employeelogin';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  employee: Employeelogin
  data : any
  token : any
  error: any = null
  constructor(private route: Router, private httpService: HttpserviceService  ,private loadingContrl: LoadingController) {}

  onSubmit(form :NgForm){
    if(form.valid){

      this.employee = {
        username : form.value.username,
        password: form.value.password
      }
      console.log(this.employee)
      this.loadingContrl.create({keyboardClose : true, message :'En chargement...'}).then(
        loadctl => {
          loadctl.present();
          setTimeout(()=> {
            this.httpService.login(this.employee).subscribe({
                next : (responseData) => {
                this.data = responseData
                this.token = this.data.token
                window.sessionStorage.setItem("Authorization",this.token);
                window.sessionStorage.setItem("userdetails",JSON.stringify(this.data));
                this.route.navigate(['/mesndf'])
            },
            error:(err) => this.error = err.message })
            loadctl.dismiss();
          },1500);
        }
      );
    }

  }

}
