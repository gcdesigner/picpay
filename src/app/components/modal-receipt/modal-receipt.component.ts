import { Component, Input, OnInit } from "@angular/core";
import {
  faCheckCircle,
  faDownload,
  faPrint,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { TransactionPayload } from "./../../model/transactionPayload";

@Component({
  selector: "app-modal-receipt",
  templateUrl: "./modal-receipt.component.html",
  styleUrls: ["./modal-receipt.component.scss"],
})
export class ModalReceiptComponent implements OnInit {
  @Input() transactionPayload: TransactionPayload;
  @Input() receiverUser: string;

  receiptDate: Date = new Date();
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faPrint = faPrint;
  faDownload = faDownload;

  constructor() {}

  ngOnInit() {}
}
