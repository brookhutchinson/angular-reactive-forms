// modules
import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  it('should create SharedModule', () => {
    expect(sharedModule).toBeTruthy();
  });
});
