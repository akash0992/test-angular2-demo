export class TestAngularDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-angular-demo-app h1')).getText();
  }
}
