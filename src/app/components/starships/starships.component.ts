import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  starships: any[] = [];
  manufacturers: string[] = [];
  selectedManufacturer: string = '';

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getStarships().subscribe((response) => {
      this.starships = response.results;
      this.manufacturers = Array.from(
        new Set(this.starships.map((ship) => ship.manufacturer))
      ).sort();
    });
  }

  filterStarships(): any[] {
    if (!this.selectedManufacturer) {
      return this.starships;
    }
    return this.starships.filter(
      (ship) => ship.manufacturer === this.selectedManufacturer
    );
  }

  clearFilter(): void {
    this.selectedManufacturer = '';
  }
  
}
