import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { ContractsComponent } from './Contracts.component';
import { ContractsDetailComponent } from './contracts-detail/contracts-detail.component';
import { ContractsEditComponent } from './contracts-edit/contracts-edit.component';
import { ContractsCreateComponent } from './contracts-create/contracts-create.component';

const routes = [
    {
        path     : 'contracts',
        component: ContractsComponent
    }
];

@NgModule({
    declarations: [
        ContractsComponent,
        ContractsDetailComponent,
        ContractsEditComponent,
        ContractsCreateComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        FuseSharedModule,
        MatListModule,
        MatCardModule

    ],
    exports     : [
        ContractsComponent
    ]
})

export class ContractsModule
{
}