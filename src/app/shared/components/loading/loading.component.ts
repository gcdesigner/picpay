import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit {
  @Input() color: string = "#fff";
  @Input() size: string = "16px";

  constructor() {}

  ngOnInit() {}
}
