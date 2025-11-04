import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyProductsComponent } from './dummy-products.component';

describe('DummyProductsComponent', () => {
  let component: DummyProductsComponent;
  let fixture: ComponentFixture<DummyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
