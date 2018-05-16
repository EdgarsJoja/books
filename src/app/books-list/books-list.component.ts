import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NytBooksService, ApiResponseInterface } from '../services/nyt-books/nyt-books.service';
import { SearchService } from '../services/search/search.service';

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
     * List display name
     *
     * @type {string}
     */
    public listName = '';

    constructor(
        private route: ActivatedRoute,
        private nytBooksService: NytBooksService,
        public search: SearchService
    ) {
        this.route.params.subscribe(data => {
            this.listId = data['list-id'];
            this.getListsDataFromApi();
        });

        this.route.queryParams.subscribe(data => {
            this.listName = data['display-name'];
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
        });
    }

    /**
     * Filter items by sear
     *
     * @returns {any[]}
     */
    get computedListData() {
        return this.listData.filter((data) => {
            return data.book_details[0].title.toLowerCase().indexOf(this.search.searchString.toLowerCase()) !== -1 ||
                data.book_details[0].author.toLowerCase().indexOf(this.search.searchString.toLowerCase()) !== -1;
        });
    }
}
