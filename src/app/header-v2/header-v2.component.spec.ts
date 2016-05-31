import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderV2Component } from './header-v2.component';

describe('Component: HeaderV2', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HeaderV2Component]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeaderV2Component],
      (component: HeaderV2Component) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeaderV2ComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeaderV2Component));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-header-v2></app-header-v2>
  `,
  directives: [HeaderV2Component]
})
class HeaderV2ComponentTestController {
}

