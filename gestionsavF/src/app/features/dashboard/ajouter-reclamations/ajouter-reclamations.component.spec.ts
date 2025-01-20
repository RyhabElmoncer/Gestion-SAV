import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReclamationsComponent } from './ajouter-reclamations.component';

describe('AjouterReclamationsComponent', () => {
  let component: AjouterReclamationsComponent;
  let fixture: ComponentFixture<AjouterReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterReclamationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
