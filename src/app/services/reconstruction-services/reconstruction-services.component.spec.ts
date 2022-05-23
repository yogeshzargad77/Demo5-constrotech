import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructionServicesComponent } from './reconstruction-services.component';

describe('ReconstructionServicesComponent', () => {
  let component: ReconstructionServicesComponent;
  let fixture: ComponentFixture<ReconstructionServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconstructionServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
