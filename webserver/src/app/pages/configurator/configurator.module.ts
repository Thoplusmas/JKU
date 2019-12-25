import { NgModule } from '@angular/core';
import { NbCardModule, NbStepperModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ConfiguratorComponent } from './configurator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule, // Used to go from config step to config step
    NbInputModule,
    FormsModule,
  ],
  declarations: [
    ConfiguratorComponent,
  ],
})
export class ConfiguratorModule { }
