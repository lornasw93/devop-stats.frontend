import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDescComponent } from './count-desc.component';

describe('CountDescComponent', () => {
  let component: CountDescComponent;
  let fixture: ComponentFixture<CountDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
