import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalizeIoComponent } from './nationalize.io.component';

describe('NationalizeIoComponent', () => {
  let component: NationalizeIoComponent;
  let fixture: ComponentFixture<NationalizeIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalizeIoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalizeIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
