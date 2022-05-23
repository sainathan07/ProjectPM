import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionManagementComponent } from './pension-management.component';

describe('PensionManagementComponent', () => {
  let component: PensionManagementComponent;
  let fixture: ComponentFixture<PensionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
