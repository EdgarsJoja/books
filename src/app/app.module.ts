import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialDesignModule } from './material-design/material-design.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        MaterialDesignModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
