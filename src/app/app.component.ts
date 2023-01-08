import { Component } from '@angular/core';

export type ITransferencia = {
  valor: number,
  destino: string,
  data: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: ITransferencia[] = [];

  transferir($event: ITransferencia) {
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}