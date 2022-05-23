import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerdetailComponent } from './pensionerdetail.component';

describe('PensionerdetailComponent', () => {
  let component: PensionerdetailComponent;
  let fixture: ComponentFixture<PensionerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
