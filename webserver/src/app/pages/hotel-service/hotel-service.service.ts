import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NbCalendarRange } from '@nebular/theme';
import { HttpErrorResponse } from '@angular/common/http';
import { Room } from './models/room.model';


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

  constructor(private apiService: ApiService) {
    this.getAllRooms();
    this.getBookings();

  }

  public getAllRooms(): void {
    this.apiService.get('http://localhost:3000/room').subscribe(
      (allRooms: Array<Room>) => this.allRooms = allRooms,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public submitRaumauswahl(): void {
    console.log("selected range: ", this.selectedDateRange);
    console.log("selected room id: ", this.raumauswahlForm.value);
    this.selectedRoom = this.raumauswahlForm.value;
    this.apiService.post('http://localhost:3000/booking', {
      roomId: this.selectedRoom,
      from: this.selectedDateRange.start,
      to: this.selectedDateRange.end,
    }).subscribe(
      (booking: any) => this.getBookings(),
      (error: HttpErrorResponse) => console.log(error),
    );


  }
  public getBookings(): void {
    this.apiService.get('http://localhost:3000/booking').subscribe(
      (allBookings: Array<any>) => this.allBookings = allBookings,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public deleteBooking(booking: any) {
    console.log("deleting booking: ", booking.id);
    this.apiService.delete('http://localhost:3000/booking/' + booking.id).subscribe(
      (response: boolean) => this.getBookings(),
      (error: HttpErrorResponse) => console.log(error),
    );
  }

}