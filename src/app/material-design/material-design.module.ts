import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule
    ],
    declarations: []
})
export class MaterialDesignModule { }
