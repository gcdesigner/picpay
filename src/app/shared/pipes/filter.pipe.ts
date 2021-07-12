import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "appFilter" })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, filterBy: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: any) => {
      return it[filterBy].toLocaleLowerCase().includes(searchText);
    });
  }
}
