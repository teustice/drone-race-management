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
}
