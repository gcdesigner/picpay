import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { ModalService } from "./modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() modalBtn: string;
  @Input() noFooter: boolean;

  display$: Observable<"open" | "close">;
  faTimes = faTimes;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.removeBodyScroll();
  }

  removeBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modalService.close();
  }

  ngOnDestroy() {
    document.body.style.overflow = "auto";
  }
}
