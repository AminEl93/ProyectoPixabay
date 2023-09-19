import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaActualComponent } from './portada-actual.component';

describe('PortadaActualComponent', () => {
  let component: PortadaActualComponent;
  let fixture: ComponentFixture<PortadaActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortadaActualComponent]
    });
    fixture = TestBed.createComponent(PortadaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
