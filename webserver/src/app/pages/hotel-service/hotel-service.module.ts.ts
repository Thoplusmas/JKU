import { NgModule } from '@angular/core';
import { NbCardModule, NbStepperModule, NbInputModule, NbListModule, NbTreeGridModule, NbCalendarModule, NbCalendarRangeModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HotelServiceComponent } from './hotel-service.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbStepperModule, // Used to go from config step to config step
    NbInputModule,
    FormsModule,
    NbListModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    MatSnackBarModule,
  ],
  declarations: [
    HotelServiceComponent,
  ],
})
export class HotelServiceModule { }