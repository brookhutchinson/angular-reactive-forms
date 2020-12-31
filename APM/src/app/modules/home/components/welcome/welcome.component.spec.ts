// modules
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';

// components
import { WelcomeComponent }          from './welcome.component';

// schemas
import { NO_ERRORS_SCHEMA }          from '@angular/core';

describe('WelcomeComponent', () => {
  // component
  let welcomeComponent: WelcomeComponent;

  // fixture
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [
        // angular modules
        HttpClientTestingModule,
      ],
      // components
      declarations: [ WelcomeComponent ],
      // services
      providers: [],
      // schemas
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    // create instance of component fixture
    fixture = TestBed.createComponent(WelcomeComponent);

    // create instance of component
    welcomeComponent = fixture.componentInstance;

    // run change detection
    fixture.detectChanges();
  });

  it('should be named WelcomeComponent', () => {
    expect(WelcomeComponent.name).toBe('WelcomeComponent');
  });

  it('should create WelcomeComponent', () => {
    expect(welcomeComponent).toBeTruthy();
  });
});
