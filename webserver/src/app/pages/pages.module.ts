import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ConfiguratorModule } from './configurator/configurator.module';
import { HotelServiceModule } from './hotel-service/hotel-service.module.ts';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ConfiguratorModule,
    HotelServiceModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
