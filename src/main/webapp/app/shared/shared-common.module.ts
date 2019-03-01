import { NgModule } from '@angular/core';

import { SampleCouchbaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SampleCouchbaseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SampleCouchbaseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleCouchbaseSharedCommonModule {}
