import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwahaeListComponent } from './hwahae-list.component';

describe('HwahaeListComponent', () => {
  let component: HwahaeListComponent;
  let fixture: ComponentFixture<HwahaeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwahaeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwahaeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
