import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { MaterialDesignModule } from './material-design/material-design.module';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BooksListsComponent } from './books-lists/books-lists.component';

// Services
import { ConfigService } from './services/config/config.service';
import { ApiService } from './services/api/api.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        BooksListsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MaterialDesignModule
    ],
    providers: [
        ConfigService,
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
