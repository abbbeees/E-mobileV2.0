import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFilterComponent } from './prodfilter.component';

describe('ProdfilterComponent', () => {
  let component: ProdFilterComponent;
  let fixture: ComponentFixture<ProdFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdFilterComponent]
    });
    fixture = TestBed.createComponent(ProdFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
