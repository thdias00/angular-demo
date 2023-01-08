import { Component, Input, OnInit } from '@angular/core';
import { ITransferencia } from '../app.component';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})

export class ExtratoComponent implements OnInit {
  @Input() transferencias!: ITransferencia[];

  constructor() {}

  ngOnInit(): void {}
}
