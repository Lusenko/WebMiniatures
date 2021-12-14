import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'main', loadChildren: () => import('./main-catalogue/main-catalogue.module').then(m => m.MainCatalogueModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
