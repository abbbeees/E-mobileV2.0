import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetComponent } from './proddet.component';

describe('ProddetComponent', () => {
  let component: ProddetComponent;
  let fixture: ComponentFixture<ProddetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProddetComponent]
    });
    fixture = TestBed.createComponent(ProddetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
