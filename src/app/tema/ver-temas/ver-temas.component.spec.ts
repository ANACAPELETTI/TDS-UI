import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTemasComponent } from './ver-temas.component';

describe('VerTemasComponent', () => {
  let component: VerTemasComponent;
  let fixture: ComponentFixture<VerTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
