import {Component} from "@angular/core";
import { AuthorService } from "./author.service";

@Component({
    selector: "author",
    templateUrl:"./author.html" ,
    providers: [AuthorService]
})

export class AuthorComponent {
    authors : String[];
    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthors();
    }
}