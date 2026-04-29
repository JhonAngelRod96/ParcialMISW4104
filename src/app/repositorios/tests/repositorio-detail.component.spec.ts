import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioDetailComponent } from './repositorio-detail.component';

describe('RepositorioDetailComponent', () => {
  let component: RepositorioDetailComponent;
  let fixture: ComponentFixture<RepositorioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
