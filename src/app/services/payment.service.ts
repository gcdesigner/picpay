import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransactionPayload } from "../model/transactionPayload";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  postPayment(params) {
    return this.http.post<TransactionPayload>(
      "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
      { params }
    );
  }
}
