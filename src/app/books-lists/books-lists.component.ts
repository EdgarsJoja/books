import { Component, OnInit } from '@angular/core';

import { NytBooksService, ApiResponseInterface } from '../services/nyt-books/nyt-books.service';

@Component({
    selector: 'app-books-lists',
    templateUrl: './books-lists.component.html',
    styleUrls: ['./books-lists.component.scss']
})
export class BooksListsComponent implements OnInit {

    public categories = [];

    constructor(private nytBooksService: NytBooksService) {
        this.nytBooksService.getApiData(this.nytBooksService.getListsNamesApiUrl()).subscribe((data: ApiResponseInterface) => {
            this.categories = data.results;
        });
    }

    ngOnInit() {

    }
}
