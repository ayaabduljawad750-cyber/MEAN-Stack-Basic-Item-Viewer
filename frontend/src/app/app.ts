import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Items } from './components/items/items';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Items ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
