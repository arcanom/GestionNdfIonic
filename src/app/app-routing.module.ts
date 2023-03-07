import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'connexion',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'mesndf',
    loadChildren: () => import('./mesndf/mesndf.module').then( m => m.MesndfPageModule)
  },
  {
    path: 'formulaire-ndf',
    loadChildren: () => import('./formulaire-ndf/formulaire-ndf.module').then( m => m.FormulaireNdfPageModule)
  },
  {
    path: 'historique-ndf',
    loadChildren: () => import('./historique-ndf/historique-ndf.module').then( m => m.HistoriqueNdfPageModule)
  },
  {
    path: 'inscription-employee',
    loadChildren: () => import('./inscription-employee/inscription-employee.module').then( m => m.InscriptionEmployeePageModule)
  },
  {
    path: 'traitement-ndf',
    loadChildren: () => import('./traitement-ndf/traitement-ndf.module').then( m => m.TraitementNdfPageModule)
  },
  {
    path: 'details-ndf/:id',
    loadChildren: () => import('./detailsndf/detailsndf.module').then( m => m.DetailsndfPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
