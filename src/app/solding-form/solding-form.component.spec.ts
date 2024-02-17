import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldingFormComponent } from './solding-form.component';

describe('SoldingFormComponent', () => {
  let component: SoldingFormComponent;
  let fixture: ComponentFixture<SoldingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoldingFormComponent]
    });
    fixture = TestBed.createComponent(SoldingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
