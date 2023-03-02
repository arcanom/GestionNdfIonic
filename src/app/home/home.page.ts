import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router, private loadingContrl: LoadingController) {}

  onSubmit(form :NgForm){
    this.loadingContrl.create({keyboardClose : true, message :'En chargement...'}).then(
      loadctl => {
        loadctl.present();
        setTimeout(()=> {

          loadctl.dismiss();
          this.route.navigate(['/mesndf']);
        },1500);
      }
    );
  }

}
