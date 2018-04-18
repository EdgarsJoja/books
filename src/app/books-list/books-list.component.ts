import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api/api.service';

import { ApiResponseInterface } from '../services/api/api.service';

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

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
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
        this.apiService.getApiData(
            this.apiService.getListsApiUrl(),
            { list: this.listId }
        ).subscribe((data: ApiResponseInterface) => {
            this.listData = data.results;
            console.log(data);
        });
    }
}
