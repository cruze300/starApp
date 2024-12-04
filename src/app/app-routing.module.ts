import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
