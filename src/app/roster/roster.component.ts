import { Component, OnInit } from '@angular/core';
import { PilotService } from '../pilot.service';
import { Pilot } from '../pilot.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [PilotService]
})
export class RosterComponent implements OnInit {
  pilots = [];
  weightSelected;
  constructor(private pilotService: PilotService, private router: Router) { }

  ngOnInit() {
    this.pilotService.getPilots().subscribe(data => {
      this.pilots = data;
    })
  }

  submitForm(name: string, weight: string, frequency: string, image: string) {
    var newPilot: Pilot = new Pilot(name, weight, frequency, image);
    this.pilotService.addPilot(newPilot);
  }

  goToDetailPage(clickedPilot) {
    this.router.navigate(['roster', clickedPilot.$key]);
  }

  onChange(weight) {
    this.weightSelected = weight;
  }
}
