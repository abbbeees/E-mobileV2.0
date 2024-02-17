import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasepopupComponent } from './casepopup.component';

describe('CasepopupComponent', () => {
  let component: CasepopupComponent;
  let fixture: ComponentFixture<CasepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasepopupComponent]
    });
    fixture = TestBed.createComponent(CasepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
