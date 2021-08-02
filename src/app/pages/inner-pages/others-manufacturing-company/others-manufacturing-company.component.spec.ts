import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersManufacturingCompanyComponent } from './others-manufacturing-company.component';

describe('OthersManufacturingCompanyComponent', () => {
  let component: OthersManufacturingCompanyComponent;
  let fixture: ComponentFixture<OthersManufacturingCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OthersManufacturingCompanyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersManufacturingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
