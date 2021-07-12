import { HttpClientModule } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxCurrencyModule } from "ngx-currency";
import { AppComponent } from "./app.component";
import { ModalPaymentComponent } from "./components/modal-payment/modal-payment.component";
import { ModalReceiptComponent } from "./components/modal-receipt/modal-receipt.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { PaymentService } from "./services/payment.service";
import { UserService } from "./services/user.service";
import { LoadingComponent } from "./shared/components/loading/loading.component";
import { ModalComponent } from "./shared/components/modal/modal.component";
import { ModalService } from "./shared/components/modal/modal.service";
import { FilterPipe } from "./shared/pipes/filter.pipe";

import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ModalPaymentComponent,
    ModalComponent,
    UserListComponent,
    ModalReceiptComponent,
    LoadingComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCurrencyModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    ModalService,
    UserService,
    PaymentService,
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
