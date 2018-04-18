import { Component, OnInit } from '@angular/core';

import { ApiService, ApiResponseInterface } from '../services/api/api.service';

@Component({
    selector: 'app-books-lists',
    templateUrl: './books-lists.component.html',
    styleUrls: ['./books-lists.component.scss']
})
export class BooksListsComponent implements OnInit {

    public categories = [];

    constructor(private apiService: ApiService) {
        this.apiService.getApiData(this.apiService.getListsNamesApiUrl()).subscribe((data: ApiResponseInterface) => {
            this.categories = data.results;
            console.log(this.categories);
        });
    }

    ngOnInit() {

    }
}
