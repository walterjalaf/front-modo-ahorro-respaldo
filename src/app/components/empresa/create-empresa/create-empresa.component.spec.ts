import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpresaComponent } from './create-empresa.component';

describe('CreateEmpresaComponent', () => {
  let component: CreateEmpresaComponent;
  let fixture: ComponentFixture<CreateEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
