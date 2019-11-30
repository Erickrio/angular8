import { Component, OnInit, Input } from '@angular/core';
import {  BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  //Vamos receber esse atributo de message
  @Input() message: string;

  //tipo do alerta
  @Input() type = 'success';

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  //fecha Modal
  onClose(){
    this.bsModalRef.hide();
  }

}
