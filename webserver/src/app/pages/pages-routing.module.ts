import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { HotelServiceComponent } from './hotel-service/hotel-service.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'configurator',
      component: ConfiguratorComponent,
    },
    {
      path: 'hotel-service',
      component: HotelServiceComponent,
    },
    {
      path: '',
      redirectTo: 'configurator',
      pathMatch: 'full',
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
