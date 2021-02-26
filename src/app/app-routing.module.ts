import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponentComponent } from 'src/app/components/dashboard/dashboard-main-component/dashboard-main-component.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardMainComponentComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
