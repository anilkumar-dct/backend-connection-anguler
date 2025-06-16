import { Component, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClientServices } from '../../httpClient.Sevices';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  isFetching = signal(false);
  places = signal<Place[] | undefined>(undefined);
  constructor(private httpClientServices: HttpClientServices) {}
  ngOnInit(): void {
    this.isFetching.set(true);
    this.httpClientServices.getAllUser().subscribe(
      (data) => {
        this.places.set(data.places);
        this.isFetching.set(false);
      },
      (error) => {
        console.log(error);
        this.isFetching.set(false);
      }
    );
  }
}
