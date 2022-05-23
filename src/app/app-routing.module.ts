import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : 'home', loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path : 'services', loadChildren:()=>import('./services/services.module').then(mod=>mod.ServicesModule)},
  {path : 'portfolio', loadChildren:()=>import('./portfolio/portfolio.module').then(mod=>mod.PortfolioModule)},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
