import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilEditComponent } from './fossil-edit.component';

describe('FossilEditComponent', () => {
  let component: FossilEditComponent;
  let fixture: ComponentFixture<FossilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
