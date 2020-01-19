import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NbCalendarRange } from '@nebular/theme';
import { HttpErrorResponse } from '@angular/common/http';
import { Room } from './models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'hotel-service',
  templateUrl: './hotel-service.component.html',
})

export class HotelServiceComponent {

  @ViewChild('raumauswahlForm', { static: false }) public raumauswahlForm: NgForm;

  public allRooms: Array<Room>;
  public selectedRoom: number;

  public allBookings: Array<any>;

  public selectedDateRange: NbCalendarRange<Date>;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {
    this.getAllRooms();
    this.getBookings();

  }

  public getAllRooms(): void {
    this.apiService.get('https://hotelservicejku.azurewebsites.net/api/room').subscribe(
      (allRooms: Array<Room>) => {
        this.allRooms = allRooms;
        console.log(this.allRooms)
      }
      ,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public submitRaumauswahl(): void {
    console.log("selected range: ", this.selectedDateRange);
    console.log("selected room id: ", this.raumauswahlForm.form.value.room);
    this.selectedRoom = this.raumauswahlForm.form.value.room;
    this.apiService.post('https://hotelservicejku.azurewebsites.net/api/booking', {
      roomId: this.selectedRoom,
      from: this.selectedDateRange.start,
      to: this.selectedDateRange.end,
    }).subscribe(
      (booking: any) => this.getBookings(),
      (error: HttpErrorResponse) => {
        let snackBarRef = this._snackBar.open('Room already booked for this time period.', '', { duration: 3000 });

        console.log(error)
      },
    );


  }
  public getBookings(): void {
    this.apiService.get('https://hotelservicejku.azurewebsites.net/api/booking').subscribe(
      (allBookings: Array<any>) => this.allBookings = allBookings,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public deleteBooking(booking: any) {
    console.log("deleting booking: ", booking.id);
    this.apiService.delete('https://hotelservicejku.azurewebsites.net/api/booking/' + booking.id).subscribe(
      (response: boolean) => this.getBookings(),
      (error: HttpErrorResponse) => console.log(error),
    );
  }

}