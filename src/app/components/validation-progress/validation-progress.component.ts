import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-progress',
  templateUrl: './validation-progress.component.html',
  styleUrls: ['./validation-progress.component.scss'],
})
export class ValidationProgressComponent implements OnInit {

  titleStatus: string | undefined;
  idStatus: string | undefined;
  statusText: string | undefined;
  descriptionList: any | undefined;

  constructor() { }

  ngOnInit() {

    let dataTest = {
      // "titleStatus": "Validación de Información",
      // "idStatus": 'revision',
      // "statusText": 'En revisión',

      // "titleStatus": "Validación de Información",
      // "idStatus": 'reject',
      // "statusText": 'Rechazada',

      "titleStatus": "Firma de Contrato",
      "idStatus": 'pending',
      "statusText": 'Pendiente',

      "descriptionList": [
        {
        "description": "El comprobante de domicilio no es legible"
        },
        {
          "description": "La INE no es legible"
        }
      ]
    }
    
    this.titleStatus = dataTest.titleStatus;
    this.idStatus = dataTest.idStatus;
    this.statusText = dataTest.statusText;
    this.descriptionList = dataTest.descriptionList;
  }

}
