import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Greeting} from "./greeting.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  greetingUrl = '/api/hello';

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<Greeting> {
    return this.http.get<Greeting>(this.greetingUrl);
  }

}
