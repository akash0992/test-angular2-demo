import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestAngularDemoAppComponent } from '../app/test-angular-demo.component';

beforeEachProviders(() => [TestAngularDemoAppComponent]);

describe('App: TestAngularDemo', () => {
  it('should create the app',
      inject([TestAngularDemoAppComponent], (app: TestAngularDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-angular-demo works!\'',
      inject([TestAngularDemoAppComponent], (app: TestAngularDemoAppComponent) => {
    expect(app.title).toEqual('test-angular-demo works!');
  }));
});
