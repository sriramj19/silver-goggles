import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
