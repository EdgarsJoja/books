import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: []
})
export class MaterialDesignModule { }
