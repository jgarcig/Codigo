import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormDocumentsDataWebComponent } from './form-documents-data-web.component';

describe('FormDocumentsDataWebComponent', () => {
  let component: FormDocumentsDataWebComponent;
  let fixture: ComponentFixture<FormDocumentsDataWebComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDocumentsDataWebComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormDocumentsDataWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
