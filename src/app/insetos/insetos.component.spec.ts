import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsetosComponent } from './insetos.component';

describe('InsetosComponent', () => {
  let component: InsetosComponent;
  let fixture: ComponentFixture<InsetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
