import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kl-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  public ngOnInit() {
    console.log('RegisterComponent init');
  }
}