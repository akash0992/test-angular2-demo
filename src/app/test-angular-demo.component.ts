

import { Component,DynamicComponentLoader,ElementRef,Injector,ViewContainerRef} from '@angular/core';

import {ApplicationConstants} from './shared/const';

@Component({
  moduleId: module.id,
  selector: 'test-angular-demo-app',
  templateUrl: 'test-angular-demo.component.html',
  styleUrls: ['test-angular-demo.component.css']
})
export class TestAngularDemoAppComponent {
  title = 'test-angular-demo works!';
  // header: HeaderV1Component;

  /* constructor(loader: DynamicComponentLoader, viewContainerRef: ViewContainerRef) {

   //loader.loadNextToLocation(eval("HeaderV1Component"), viewContainerRef);
   //var x = eval("this.header");
   //console.log(new x());

   ApplicationConstants.DIRECTIVE.forEach((u) => {
   u.c.then(m => {
   loader.loadNextToLocation(m[u.n], viewContainerRef);
   });
   });

   }*/

  constructor(loader: DynamicComponentLoader, injector: Injector) {

    ApplicationConstants.DIRECTIVE.forEach((u,i) => {
      u.c.then(m => {
        loader.loadAsRoot(m[u.n],'#container'+i, injector);
      });
    });



    //ApplicationConstants.DIRECTIVE.forEach((u,i) => {
    //
    //  loader.loadAsRoot(u, '#container'+i, injector);
    //
    //})

  }


}
