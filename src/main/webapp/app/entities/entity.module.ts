import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#SampleCouchbaseRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#SampleCouchbaseCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#SampleCouchbaseLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#SampleCouchbaseDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#SampleCouchbaseTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#SampleCouchbaseEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#SampleCouchbaseJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#SampleCouchbaseJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleCouchbaseEntityModule {}
