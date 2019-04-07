import mongoose from 'mongoose';
import {Subject} from 'rxjs';

export class MongoDB {

  get onConnected(): Promise<void> {
    return this.onConnectedSubject.asObservable().toPromise();
  }

  public onConnectedSubject: Subject<void> = new Subject();

  constructor() {
    mongoose.connect('mongodb://localhost/db', {useNewUrlParser: true});
    mongoose.connection.once('open', () => {
      this.onConnectedSubject.next();
      this.onConnectedSubject.complete();
    });
    mongoose.connection.on('error', () => {
      this.onConnectedSubject.error('mongo connection error');
      this.onConnectedSubject.complete();
    });
  }

}