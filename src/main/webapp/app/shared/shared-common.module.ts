import { NgModule } from '@angular/core';

import { JhipsterJavaAngularAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterJavaAngularAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterJavaAngularAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterJavaAngularAppSharedCommonModule {}
