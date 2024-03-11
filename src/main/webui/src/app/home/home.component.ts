import {Component, OnInit} from '@angular/core';
import {Greeting} from "../greeting/greeting.interface";
import {GreetingService} from "../greeting/greeting.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  helloMessage = {
    text: ''
  } as Greeting;

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greetingService.getGreeting().subscribe(
      helloMessage => this.helloMessage = helloMessage
    );
  }
}
