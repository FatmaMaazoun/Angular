import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteilProductComponent } from './deteil-product.component';

describe('DeteilProductComponent', () => {
  let component: DeteilProductComponent;
  let fixture: ComponentFixture<DeteilProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteilProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteilProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
