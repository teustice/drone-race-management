import { Injectable } from '@angular/core';
import { Pilot } from './pilot.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PilotService {
  pilots: FirebaseListObservable<any[]>;
  isAdmin: boolean = false;

  constructor(private database: AngularFireDatabase) {
    this.pilots = database.list('pilots');
  }

  getPilots(){
    return this.pilots;
  }

  addPilot(newPilot: Pilot) {
    this.pilots.push(newPilot);
  }

  adminMode(){
    if(this.isAdmin === false){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  getPilotById(pilotId: string){
    return this.database.object('pilots/' + pilotId);
  }

  updatePilot(localPilot){
    var pilotEntryInFirebase = this.getPilotById(localPilot.$key);
    pilotEntryInFirebase.update({name: localPilot.name,
                                weightClass: localPilot.weightClass,
                                frequency: localPilot.frequency,
                                image: localPilot.image});
  }

  deletePilot(pilot){
    var storedPilot = this.getPilotById(pilot.$key);
    storedPilot.remove();
  }

}
