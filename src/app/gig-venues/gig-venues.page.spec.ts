import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { GigVenuesPage } from './gig-venues.page';

describe('GigVenuesPage', () => {
  let component: GigVenuesPage;
  let fixture: ComponentFixture<GigVenuesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GigVenuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
