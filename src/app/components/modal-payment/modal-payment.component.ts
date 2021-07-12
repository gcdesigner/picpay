import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  faCheckCircle,
  faCreditCard,
  faWallet,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import { TransactionPayload } from "../../model/transactionPayload";
import { User } from "../../model/user";
import { PaymentService } from "../../services/payment.service";
import { ModalService } from "../../shared/components/modal/modal.service";

@Component({
  selector: "app-modal-payment",
  templateUrl: "./modal-payment.component.html",
  styleUrls: ["./modal-payment.component.scss"],
})
export class ModalPaymentComponent implements OnInit {
  @Input() user: User;

  paymentForm: FormGroup;
  creditCards: any[] = [
    // valid card
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    // invalid card
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ];

  submitted: boolean;
  transactionPayload: TransactionPayload;
  modalReceipt: boolean;
  isLoading: boolean;
  faCreditCard = faCreditCard;
  faCheckCircle = faCheckCircle;
  faWallet = faWallet;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.paymentForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(10)]],
      creditCard: [this.creditCards[0], [Validators.required]],
    });
  }

  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    const { card_number, cvv, expiry_date } = this.f.creditCard.value;
    const { value } = this.f.amount;
    const payload: TransactionPayload = {
      card_number,
      cvv,
      expiry_date,
      destination_user_id: this.user.id,
      value,
    };

    if (cvv === 789) {
      this.postPayment(payload);
    } else {
      this.transactionPayload = null;
      this.isLoading = true;
      setTimeout(() => {
        this.openModalReceipt();
      }, 500);
    }
  }

  postPayment(payload: TransactionPayload) {
    try {
      this.isLoading = true;
      this.paymentService.postPayment(payload).subscribe((response: any) => {
        if (response.status === "Aprovada") {
          this.transactionPayload = payload;
          this.openModalReceipt();
        }
      });
    } catch (error) {
      this.transactionPayload = null;
      this.openModalReceipt();
    }
  }

  openModalReceipt() {
    this.isLoading = false;
    this.modalReceipt = true;
    this.modalService.open();
  }
}
