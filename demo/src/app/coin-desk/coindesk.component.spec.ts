import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoindeskComponent } from './coindesk.component';

describe('CoindeskComponent', () => {
  let component: CoindeskComponent;
  let fixture: ComponentFixture<CoindeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoindeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoindeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
