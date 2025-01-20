import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttechComponent } from './ajouttech.component';

describe('AjouttechComponent', () => {
  let component: AjouttechComponent;
  let fixture: ComponentFixture<AjouttechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouttechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouttechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
