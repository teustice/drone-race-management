import { Injectable } from '@angular/core';
import { Pilot } from './pilot.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PilotService {
  pilots: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.pilots = database.list('pilots');
 }

 getPilots(){
    return this.pilots;
  }
}
