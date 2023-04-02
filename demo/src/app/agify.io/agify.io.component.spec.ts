import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgifyIoComponent } from './agify.io.component';

describe('AgifyIoComponent', () => {
  let component: AgifyIoComponent;
  let fixture: ComponentFixture<AgifyIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgifyIoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgifyIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
