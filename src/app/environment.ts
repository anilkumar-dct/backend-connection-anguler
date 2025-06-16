import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Enviornment {
  production = false;
  baseUrl = 'http://localhost:3000/';
}
