import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api/api.service';

import { ApiResponseInterface } from '../services/api/api.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

    public isbn;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
        this.route.params.subscribe(data => {
            this.isbn = data['isbn'];
        });
    }

    ngOnInit() {
    }
}
