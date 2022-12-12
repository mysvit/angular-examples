import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateClickComponent } from './simulate-click.component';

describe('SimulateClickComponent', () => {
  let component: SimulateClickComponent;
  let fixture: ComponentFixture<SimulateClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
