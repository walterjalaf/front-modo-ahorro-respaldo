import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaComponent } from './torta.component';

describe('TortaComponent', () => {
  let component: TortaComponent;
  let fixture: ComponentFixture<TortaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TortaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
