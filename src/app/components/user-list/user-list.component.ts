import { Component, OnInit } from "@angular/core";
import {
  faCreditCard,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { ModalService } from "../../shared/components/modal/modal.service";
import { User } from "./../../model/user";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  selectedUser: User;
  modalPayment: boolean;
  filter: string = "";
  faSearch = faSearch;
  faUser = faUser;
  faCreditCard = faCreditCard;
  isLoading: boolean = true;

  constructor(
    public userService: UserService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.modalService.watch().subscribe((modal) => {
      if (modal === "close") this.modalPayment = false;
    });
  }

  getUsers() {
    this.users = this.userService.getUser();

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  filterUsers() {
    this.users
      .pipe(filter((user, i) => user[i].name === this.filter))
      .subscribe((e) => console.log(e));
  }

  openModalPayment(user: User) {
    this.selectedUser = user;
    this.modalPayment = true;
    this.modalService.open();
  }
}
