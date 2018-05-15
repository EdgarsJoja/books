import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Environment
import { environment } from '../environments/environment';

// Modules
import { MaterialDesignModule } from './material-design/material-design.module';
import { AppShellModule } from './app-shell/app-shell.module';

// Components
import { AppComponent } from './app.component';
import { BooksListsComponent } from './books-lists/books-lists.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { AppShellComponent } from './app-shell/app-shell.component';

// Services
import { ConfigService } from './services/config/config.service';
import { ApiService } from './services/api/api.service';
import { NytBooksService } from './services/nyt-books/nyt-books.service';
import { OlBooksService } from './services/ol-books/ol-books-service.service';
import { SearchService } from './services/search/search.service';

// Routes
// @todo: Move routes to different place

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lists', component: BooksListsComponent },
    { path: 'lists/:list-id', component: BooksListComponent, data: { display_name: '' } },
    { path: 'lists/:list-id/:isbn', component: BookComponent },
    { path: '', component: AppShellComponent, outlet: 'app-shell' }
];

@NgModule({
    declarations: [
        AppComponent,
        BooksListsComponent,
        BooksListComponent,
        BookComponent,
        LoaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        MaterialDesignModule,
        RouterModule.forRoot(routes),
        ServiceWorkerModule.register('/books-pwa-build/ngsw-worker.js', {
            enabled: environment.production
        }),
        BrowserAnimationsModule,
        AppShellModule
    ],
    providers: [
        ConfigService,
        ApiService,
        NytBooksService,
        OlBooksService,
        SearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
