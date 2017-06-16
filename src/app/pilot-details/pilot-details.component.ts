import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Pilot } from '../pilot.model';
import { PilotService } from '../pilot.service';

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
    });
    this.pilotToDisplay = this.pilotService.getPilotById(this.pilotId);
  }

}
