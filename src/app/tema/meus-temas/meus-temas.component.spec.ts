import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusTemasComponent } from './meus-temas.component';

describe('MeusTemasComponent', () => {
  let component: MeusTemasComponent;
  let fixture: ComponentFixture<MeusTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusTemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
