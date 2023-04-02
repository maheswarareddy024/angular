import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactApiComponent } from './fact-api.component';

describe('FactApiComponent', () => {
  let component: FactApiComponent;
  let fixture: ComponentFixture<FactApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
