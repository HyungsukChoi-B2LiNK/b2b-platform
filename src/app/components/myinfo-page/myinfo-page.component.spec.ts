import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinfoPageComponent } from './myinfo-page.component';

describe('MyinfoPageComponent', () => {
  let component: MyinfoPageComponent;
  let fixture: ComponentFixture<MyinfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
