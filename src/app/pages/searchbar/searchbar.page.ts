import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumnes: any[] = [];
  textoBuscar: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumnes().subscribe(albumnes => {
      console.log(albumnes);
      this.albumnes = albumnes;
    });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
