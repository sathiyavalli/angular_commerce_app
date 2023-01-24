import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "./filter.pipe";
import { FormsModule } from "@angular/forms";
import { NgSrcModule } from "ng-src";

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgSrcModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
