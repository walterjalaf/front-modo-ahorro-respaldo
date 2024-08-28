import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexColaboradorComponent } from './index-colaborador.component';

describe('IndexColaboradorComponent', () => {
  let component: IndexColaboradorComponent;
  let fixture: ComponentFixture<IndexColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexColaboradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
