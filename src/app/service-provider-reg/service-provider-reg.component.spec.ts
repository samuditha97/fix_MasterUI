import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderRegComponent } from './service-provider-reg.component';

describe('ServiceProviderRegComponent', () => {
  let component: ServiceProviderRegComponent;
  let fixture: ComponentFixture<ServiceProviderRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProviderRegComponent]
    });
    fixture = TestBed.createComponent(ServiceProviderRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
