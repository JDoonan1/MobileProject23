import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalwayWeatherPage } from './galway-weather.page';

describe('GalwayWeatherPage', () => {
  let component: GalwayWeatherPage;
  let fixture: ComponentFixture<GalwayWeatherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalwayWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
