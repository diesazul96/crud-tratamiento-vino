import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface tratamientoDeDiego {
  id: string;
  origenAgua: string;
  quimicosAgua: string;
  fertilizantes: string;
  pesticidas: string;
  fungicidas: string;
}

@Component({
  selector: 'crudTratamiento',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<tratamientoDeDiego>;
  item: any = {};
  items: tratamientoDeDiego[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<tratamientoDeDiego>('tratamientoDeDiego');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as tratamientoDeDiego;
          data.id = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createtratamientoDeDiego() {
    if (!this.item.id) {
      this.item.id = Date.now();
    }

    return this.db.collection('tratamientoDeDiego').add(
      this.item
    );
  }

  deletetratamientoDeDiego() {
    return this.db.collection('tratamientoDeDiego').doc(this.item.id).delete();
  }

  seleccionarTratamiento(item) {
    this.item = item;
  }

  updatetratamientoDeDiego() {
    this.db.doc('/tratamientoDeDiego/' + this.item.id).update(
      this.item
    );
  }

}
