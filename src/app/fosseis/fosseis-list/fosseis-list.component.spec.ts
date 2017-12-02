import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosseisListComponent } from './fosseis-list.component';

describe('FosseisListComponent', () => {
  let component: FosseisListComponent;
  let fixture: ComponentFixture<FosseisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosseisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosseisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
