import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { CodeInputModule } from 'angular-code-input';
import { FormPersonalDataComponent } from './form-personal-data/form-personal-data.component';
import { IndexProgressWelcomeComponent } from './index-progress-welcome/index-progress-welcome.component';
import { FormAddressDataComponent } from './form-address-data/form-address-data.component';
import { FormFinanceDataComponent } from './form-finance-data/form-finance-data.component';
import { FormDocumentsDataComponent } from './form-documents-data/form-documents-data.component';
import { InstructionsPhotoComponent } from './modals/instructions-photo/instructions-photo.component';
import { FormConfirmDataComponent } from './form-confirm-data/form-confirm-data.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { ValidatePendingComponent } from './modals/validate-pending/validate-pending.component';
import { ValidationProgressComponent } from './validation-progress/validation-progress.component';
import { CarruselWebComponent } from './carrusel-web/carrusel-web.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StepperFormulariosWebComponent } from './stepper-formularios-web/stepper-formularios-web.component';
import { FormPersonalDataWebComponent } from './web-forms/form-personal-data-web/form-personal-data-web.component';
import { FormFinanceDataWebComponent } from './web-forms/form-finance-data-web/form-finance-data-web.component';
import { FormDocumentsDataWebComponent } from './web-forms/form-documents-data-web/form-documents-data-web.component';
import { FormConfirmDataWebComponent } from './web-forms/form-confirm-data-web/form-confirm-data-web.component';
import { FormAddressDataWebComponent } from './web-forms/form-address-data-web/form-address-data-web.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    TwoFactorAuthComponent,
    FormPersonalDataComponent,
    IndexProgressWelcomeComponent,
    FormAddressDataComponent,
    FormFinanceDataComponent,
    FormDocumentsDataComponent,
    InstructionsPhotoComponent,
    FormConfirmDataComponent,
    AccordionListComponent,
    ValidatePendingComponent,
    ValidationProgressComponent,
    CarruselWebComponent,
    HeaderComponent,
    FooterComponent,
    StepperFormulariosWebComponent,
    FormPersonalDataWebComponent,
    FormFinanceDataWebComponent,
    FormDocumentsDataWebComponent,
    FormConfirmDataWebComponent,
    FormAddressDataWebComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    CodeInputModule
  ],
  exports:[
    LoginComponent,
    SignInComponent,
    TwoFactorAuthComponent,
    FormPersonalDataComponent,
    IndexProgressWelcomeComponent,
    FormAddressDataComponent,
    FormFinanceDataComponent,
    FormDocumentsDataComponent,
    InstructionsPhotoComponent,
    FormConfirmDataComponent,
    AccordionListComponent,
    ValidatePendingComponent,
    ValidationProgressComponent,
    CarruselWebComponent,
    HeaderComponent,
    FooterComponent,
    StepperFormulariosWebComponent,
    FormPersonalDataWebComponent,
    FormFinanceDataWebComponent,
    FormDocumentsDataWebComponent,
    FormConfirmDataWebComponent,
    FormAddressDataWebComponent
  ]
})
export class ComponentsModule { }
