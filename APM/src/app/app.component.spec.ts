// angular modules
import { TestBed }             from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// components
import { AppComponent }        from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // modules
      imports: [ RouterTestingModule ],
      // components
      declarations: [ AppComponent ],
    }).compileComponents();
  });

  it('should be named AppComponent', () => {
    expect(AppComponent.name).toBe('AppComponent');
  });

  it('should create AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have as title 'Acme Product Management'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app.pageTitle).toEqual('ACME Product Management');
  });
});
