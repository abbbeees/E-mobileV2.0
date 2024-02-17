import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCaseComponent } from './design-case.component';

describe('DesignCaseComponent', () => {
  let component: DesignCaseComponent;
  let fixture: ComponentFixture<DesignCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignCaseComponent]
    });
    fixture = TestBed.createComponent(DesignCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
