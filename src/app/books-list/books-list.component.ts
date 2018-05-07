import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NytBooksService, ApiResponseInterface } from '../services/nyt-books/nyt-books.service';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

    /**
     * List Id, by which calls are made to API
     *
     * @type {string}
     */
    private listId = '';

    /**
     * List with books data
     *
     * @type {Array}
     */
    public listData = [];

    /**
     * Whether loader is showing
     *
     * @type {boolean}
     */
    public showLoader = true;

    constructor(private route: ActivatedRoute, private nytBooksService: NytBooksService) {
        this.route.params.subscribe(data => {
            this.listId = data['list-id'];

            this.getListsDataFromApi();
        });
    }

    ngOnInit() {

    }

    /**
     * Get lists data from API
     */
    private getListsDataFromApi() {
        this.nytBooksService.getApiData(
            this.nytBooksService.getListsApiUrl(),
            { list: this.listId }
        ).subscribe((data: ApiResponseInterface) => {
            this.listData = data.results;
            this.showLoader = false;
        });
    }
}
