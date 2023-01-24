import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
class Post {
  constructor(
    public id: string,
    public index: number,
    public title: string,
    public rating: number,
    public image: string,
    public isEdible: boolean,
    public price: number,
    public tags: string[],
    public description: string
  ) {}
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  searchPrice: number;
  hideme = [];
  api: string =
    "https://my-json-server.typicode.com/sathiyavalli/itemsdata/datas";
  data = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.http.get<Post[]>(apiURL).subscribe({
        next: (res: any) => {
          this.data = res.map((res: any) => {
            return new Post(
              res.id,
              res.index,
              res.title,
              res.rating,
              res.image,
              res.isEdible,
              res.price,
              res.tags,
              res.description
            );
          });
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log("complete");
        },
      });
    });
    return promise;
  }
}
