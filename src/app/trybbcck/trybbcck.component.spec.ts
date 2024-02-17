import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrybbcckComponent } from './trybbcck.component';

describe('TrybbcckComponent', () => {
  let component: TrybbcckComponent;
  let fixture: ComponentFixture<TrybbcckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrybbcckComponent]
    });
    fixture = TestBed.createComponent(TrybbcckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
