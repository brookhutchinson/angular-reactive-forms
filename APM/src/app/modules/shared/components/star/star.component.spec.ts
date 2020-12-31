// components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarComponent }             from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be named StarComponent', () => {
    expect(StarComponent.name).toBe('StarComponent');
  });

  it('should create StarComponent', () => {
    expect(component).toBeTruthy();
  });
});
