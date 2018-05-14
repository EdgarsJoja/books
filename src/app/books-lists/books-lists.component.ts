import { Component, OnInit } from '@angular/core';

import { NytBooksService, ApiResponseInterface } from '../services/nyt-books/nyt-books.service';
import { SearchService } from '../services/search/search.service';

@Component({
    selector: 'app-books-lists',
    templateUrl: './books-lists.component.html',
    styleUrls: ['./books-lists.component.scss']
})
export class BooksListsComponent implements OnInit {

    public categories = [];

    /**
     * Whether loader is showing
     *
     * @type {boolean}
     */
    public showLoader = true;

    constructor(private nytBooksService: NytBooksService, private search: SearchService) {
        this.nytBooksService.getApiData(this.nytBooksService.getListsNamesApiUrl()).subscribe((data: ApiResponseInterface) => {
            this.categories = data.results;
            this.showLoader = false;
        });
    }

    ngOnInit() {

    }

    /**
     * Filtered lists by search value
     *
     * @returns {any[]}
     */
    get bestsellersLists() {
        return this.categories.filter((data) => {
            return data.list_name.toLowerCase().indexOf(this.search.searchString.toLowerCase()) !== -1;
        });
    }
}
