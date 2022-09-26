import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { Page1Component } from './page1/page1.component';
import { Page4Component } from './page1/page4.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3.component';

const routes: Routes = [
  { path: 'add', component: Page1Component },
  { path: 'view', component: Page2Component, canActivate: [AuthGuard] },
  { path: 'p3', component: Page3Component },
  { path: 'p4', component: Page4Component },
  { path: '**', redirectTo:"page1" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
