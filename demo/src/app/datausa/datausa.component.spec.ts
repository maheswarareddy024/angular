import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatausaComponent } from './datausa.component';

describe('DatausaComponent', () => {
  let component: DatausaComponent;
  let fixture: ComponentFixture<DatausaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatausaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
