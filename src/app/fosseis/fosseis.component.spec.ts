import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosseisComponent } from './fosseis.component';

describe('FosseisComponent', () => {
  let component: FosseisComponent;
  let fixture: ComponentFixture<FosseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
