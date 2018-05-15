import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        MaterialDesignModule,
        RouterModule
    ],
    declarations: [NavigationComponent],
    exports: [
        NavigationComponent
    ]
})
export class AppShellModule {
}
