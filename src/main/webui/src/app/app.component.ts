import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Quinoa Demo Application'

  menuItems = [
    {title: 'Home', path: 'home'},
    {title: 'Detail', path: 'detail'},
  ];

}
