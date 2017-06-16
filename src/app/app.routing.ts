import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterComponent} from './roster/roster.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
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
