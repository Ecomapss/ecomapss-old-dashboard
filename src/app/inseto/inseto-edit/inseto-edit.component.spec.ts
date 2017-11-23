import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsetoEditComponent } from './inseto-edit.component';

describe('InsetoEditComponent', () => {
  let component: InsetoEditComponent;
  let fixture: ComponentFixture<InsetoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsetoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsetoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
