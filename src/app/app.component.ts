import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //interpolation
  public Whoami = 'Angular';
  //property binding
  public isDisabled = true;
  //class binding
  isSucess = true;
  isSpecial = true;
  specialclass = 'text-special';
  public messageClasses = {
    'text-danger': !this.isSucess,
    'text-success': this.isSucess,
    'text-special': this.isSpecial,
  };
  //event binding
  public greetUser = '';
  onClick() {
    this.greetUser = 'Welcome to Angular';
  }
  //Template reference variable
  public TRV = '';
  onClick_TRV(value) {
    this.TRV = value;
  }
  public sync = '';
}
