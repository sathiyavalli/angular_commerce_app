import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchPrice: number): any[] {
    if (!items) return [];
    if (!searchPrice) return items;

    return items.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key] >= searchPrice;
      });
    });
  }
}
