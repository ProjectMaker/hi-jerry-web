import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'kl-my-places',
  templateUrl: './my-places.html'
})
export class MyPlacesComponent implements OnInit {
  protected places:Observable<any>;
  public constructor(private authHttp:AuthHttp) { }

  public ngOnInit() {
    console.log('LoginComponent init');
    this.places = this.authHttp.get('http://localhost:8080/api/place')
      .map(res => res.json());
  }

  protected signin(value:any) {
    console.log('SIGNIN')


  }
}