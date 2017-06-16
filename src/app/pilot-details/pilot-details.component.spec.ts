import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDetailsComponent } from './pilot-details.component';

describe('PilotDetailsComponent', () => {
  let component: PilotDetailsComponent;
  let fixture: ComponentFixture<PilotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
