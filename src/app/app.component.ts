import { Component } from '@angular/core';
import { PilotService } from './pilot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PilotService]
})
export class AppComponent {
  constructor(private pilotService: PilotService) {}
  
}
