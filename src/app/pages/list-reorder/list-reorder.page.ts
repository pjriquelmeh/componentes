import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: any;
  constructor() {
    this.personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  }

  ngOnInit() {
  }

  reorderItems(event) {
    console.log(`Moviendo item desde ${event.detail.from} al ${event.detail.to}.`);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  save() {
    console.log(this.personajes);
  }
}
