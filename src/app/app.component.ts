import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "sc-training",
  template: '<router-outlet></router-outlet>',
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // Used to declare the type of the variable
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }

  constructor(private http: HttpClient) {
    // This method is used to assign values to the variable
    this.query = "";
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Object>("../assets/data.json").subscribe(data => {
      this.artists = data;
    });
  }
}
