import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin: boolean = false;
  adminMode(){
    if(this.isAdmin === false){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
