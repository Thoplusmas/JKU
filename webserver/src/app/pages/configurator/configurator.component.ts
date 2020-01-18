import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NbStepperComponent } from '@nebular/theme';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ce-configurator',
  templateUrl: './configurator.component.html',
})
export class ConfiguratorComponent {
  @ViewChild('userDataForm', { static: false }) public userDataForm: NgForm;
  @ViewChild('lenkertypForm', { static: false }) public lenkertypForm: NgForm;
  @ViewChild('materialForm', { static: false }) public materialForm: NgForm;
  @ViewChild('schaltungForm', { static: false }) public schaltungForm: NgForm;
  @ViewChild('griffForm', { static: false }) public griffForm: NgForm;

  @ViewChild('stepper', { static: false }) public stepper: NbStepperComponent;


  // configuration values
  public lenkertypen: Array<string>;
  public selectedLenkertyp: string;

  public materialien: Array<string>;
  public selectedMaterial: string;

  public schaltungen: Array<string>;
  public selectedSchaltung: string;

  public griffe: Array<string>;
  public selectedGriff: string;

  public finalMessage: string;

  constructor(private apiService: ApiService) {
    this.initConfigurator();

  }

  private initConfigurator(): void {
    this.getLenkertypen();
    this.getMaterialien();
    this.getSchaltungen();
    this.getGriffe();
  }

  public getLenkertypen(): void {
    this.apiService.get('https://www.maripavi.at/produkt/lenkertyp').subscribe(
      (lenkertypen: Array<string>) => this.lenkertypen = lenkertypen,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public getMaterialien(): void {
    this.apiService.get('https://www.maripavi.at/produkt/material').subscribe(
      (materialien: Array<string>) => this.materialien = materialien,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public getSchaltungen(): void {
    this.apiService.get('https://www.maripavi.at/produkt/schaltung').subscribe(
      (schaltungen: Array<string>) => this.schaltungen = schaltungen,
      (error: HttpErrorResponse) => console.log(error),
    );
  }

  public getGriffe(): void {
    this.apiService.get('https://www.maripavi.at/produkt/griff').subscribe(
      (griffe: Array<string>) => this.griffe = griffe,
      (error: HttpErrorResponse) => console.log(error),
    );
  }


  public submitUserData(): void {
    console.log('userdata: ', this.userDataForm);
    const createUserRequest = {
      firstName: this.userDataForm.value.firstName,
      lastName: this.userDataForm.value.lastName,
      email: this.userDataForm.value.email,
      password: 'password',
    };

    // caling the auth endpoint of the CRM system.
    // This should usually be done in a service!
    this.apiService.post('http://localhost:3000/auth', createUserRequest).subscribe(
      (response: boolean) => {
        response ? this.stepper.next() : console.log("error from backend");
        console.log('created user succesfully: ', response);
      },
      (error) => console.log(error),
    );
  }


  public submitLenkertyp(): void {
    this.selectedLenkertyp = this.lenkertypForm.value.lenkertyp;
    this.stepper.next();

    // TODO: filter materials to fit description
  }
  public submitMaterial(): void {
    this.selectedMaterial = this.materialForm.value.material;
    this.stepper.next();

    // TODO: filter materials to fit description
  }
  public submitSchaltung(): void {
    this.selectedSchaltung = this.schaltungForm.value.schaltung;
    this.stepper.next();

    // TODO: filter materials to fit description
  }
  public submitGriff(): void {
    this.selectedGriff = this.griffForm.value.griff;
    this.createOrder();
  }

  public createOrder(): void {
    // TODO: ask why we need to send it in url parameters if we could use post
    // TODO: ask why response type is text and not JSON, returning the order object
    this.apiService.post('https://www.maripavi.at/bestellung?griff=' + this.selectedLenkertyp +
      '&lenkertyp=' + this.selectedLenkertyp + '&material=' + this.selectedMaterial + '&schaltung=' + this.selectedSchaltung, null, { responseType: 'text' }).subscribe(
        (response: string) => {
          this.finalMessage = response;
          this.stepper.next();

          // TODO: show success message
          console.log('created order succesfully: ', response);
        },
        (error) => console.log(error),
      );

  }
}
