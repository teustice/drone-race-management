import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterComponent} from './roster/roster.component';
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "roster",
    component: RosterComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
