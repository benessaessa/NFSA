import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAndExportCompanyComponent } from './import-and-export-company.component';

describe('ImportAndExportCompanyComponent', () => {
  let component: ImportAndExportCompanyComponent;
  let fixture: ComponentFixture<ImportAndExportCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportAndExportCompanyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAndExportCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
