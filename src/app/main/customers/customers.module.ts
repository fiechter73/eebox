import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import {FuseSharedModule} from '@fuse/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';

import { CustomersComponent } from './customers.component';
import { CustomersCreateComponent } from './customers-create/customers-create.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

const routes = [
    {
        path     : 'customers',
        component: CustomersComponent
    },
    {
        path: 'customers-detail',
        component: CustomersDetailComponent,
        data: { title: 'Contact Details' }
    },
    {
        path: 'customers-detail/:id',
        component: CustomersDetailComponent,
        data: { title: 'Contact Details' }
    },
    {
        path: 'customers-create',
        component: CustomersCreateComponent,
        data: { title: 'Create Customers' }
    },
    {
        path: 'customers-edit',
        component: CustomersEditComponent,
        data: { title: 'Edit Contact' }
    },
    {
        path: 'customers-edit/:id',
        component: CustomersEditComponent,
        data: { title: 'Edit Contact' }
    }
    
];

@NgModule({
    declarations: [
        CustomersComponent,
        CustomersCreateComponent,
        CustomersEditComponent,
        CustomersDetailComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatListModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        MatCheckboxModule        
    ],
    exports     : [
        CustomersComponent
    ]
})

export class CustomersModule
{
}