import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalwayFoodPage } from './galway-food.page';

describe('GalwayFoodPage', () => {
  let component: GalwayFoodPage;
  let fixture: ComponentFixture<GalwayFoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalwayFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

