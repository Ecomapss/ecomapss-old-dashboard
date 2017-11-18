import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsetosListComponent } from './insetos-list.component';

describe('InsetosListComponent', () => {
  let component: InsetosListComponent;
  let fixture: ComponentFixture<InsetosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsetosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsetosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
