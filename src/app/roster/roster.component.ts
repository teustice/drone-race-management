import { Component, OnInit } from '@angular/core';
import { PilotService } from '../pilot.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [PilotService]
})
export class RosterComponent implements OnInit {
  pilots: FirebaseListObservable<any[]>;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilots = this.pilotService.getPilots();
  }
}
