import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { MaterialDesignModule } from './material-design/material-design.module';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BooksListsComponent } from './books-lists/books-lists.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';

// Services
import { ConfigService } from './services/config/config.service';
import { ApiService } from './services/api/api.service';
import { NytBooksService } from './services/nyt-books/nyt-books.service';
import { OlBooksService } from './services/ol-books/ol-books-service.service';

// Routes
// @todo: Move routes to different place

const routes: Routes = [
    { path: 'lists', component: BooksListsComponent },
    { path: 'lists/:list-id', component: BooksListComponent },
    { path: 'lists/:list-id/:isbn', component: BookComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        BooksListsComponent,
        BooksListComponent,
        BookComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MaterialDesignModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ConfigService,
        ApiService,
        NytBooksService,
        OlBooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
