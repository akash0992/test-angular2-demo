import { TestAngularDemoPage } from './app.po';

describe('test-angular-demo App', function() {
  let page: TestAngularDemoPage;

  beforeEach(() => {
    page = new TestAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test-angular-demo works!');
  });
});
