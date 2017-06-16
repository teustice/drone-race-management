import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterComponent} from './roster/roster.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "roster",
    component: RosterComponent
  },
  {
    path: 'roster/:id',
    component: PilotDetailsComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
