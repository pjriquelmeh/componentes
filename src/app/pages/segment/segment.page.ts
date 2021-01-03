import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  seg: string;
  superHeroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService) {
    this.seg = 'todos';
  }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;
    console.log(valorSegmento);
  }
}
