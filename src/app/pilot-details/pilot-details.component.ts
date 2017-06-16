import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Pilot } from '../pilot.model';
import { PilotService } from '../pilot.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private pilotService: PilotService) { }
  pilotId;
  pilotToDisplay;

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.pilotId = urlParams['id']
    })

    this.pilotService.getPilotById(this.pilotId).subscribe(data => {
      this.pilotToDisplay = data;
    })

    console.log(this.pilotToDisplay.name);
  }

  updatePilot(pilot){
    this.pilotService.updatePilot(pilot);
  }

}
