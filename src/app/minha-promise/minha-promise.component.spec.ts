import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPromiseComponent } from './minha-promise.component';

describe('MinhaPromiseComponent', () => {
  let component: MinhaPromiseComponent;
  let fixture: ComponentFixture<MinhaPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
