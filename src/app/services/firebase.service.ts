import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  blogRef: AngularFirestoreCollection;
  categoryRef: AngularFirestoreCollection;
  challengeRef: AngularFirestoreCollection;
  moodRef: AngularFirestoreCollection;
  ressourciumRef: AngularFirestoreCollection;
  kolumneRef: AngularFirestoreCollection;

  constructor(private angularFirestore: AngularFirestore) {
    this.blogRef = angularFirestore.collection('blog');
    this.categoryRef = angularFirestore.collection('category');
    this.challengeRef = angularFirestore.collection('challenge');
    this.moodRef = angularFirestore.collection('mood');
    this.kolumneRef = angularFirestore.collection('kolumne');
    this.ressourciumRef = angularFirestore.collection('ressourcium');

    // this.addToDb();
  }

  getBlogData() {
    return this.blogRef;
  }
  getCategoryData() {
    return this.categoryRef;
  }
  getChallengeData() {
    return this.challengeRef;
  }
  getMoodData() {
    return this.moodRef;
  }
  getRessourciumData() {
    return this.ressourciumRef;
  }
  getKolumneData() {
    return this.kolumneRef;
  }

  getChallengeByCategory(category) {
    // console.log('category', category);

    if (category) {
      console.log('category', category);
      return this.angularFirestore.collection('challenge', ref => ref.where('category', '==', category));
    } else {
      return this.challengeRef;
    }
  }

  submitSentiment(sentiment) {
    return this.moodRef.add(sentiment);
  }

  addToDb() {
    const data = [
      {
        "beschreibung": {
          "de": "Hast du in deiner Nachbarschaft Menschen, die Hilfe bei täglichen Erledigungen (z.B. Einkaufen) brauchen? Wenn es dir möglich ist, dann könntest du ihnen anbieten für sie einkaufen zu gehen."
        },
        "id": "leer",
        "category": "dontgocrazyshopforsomeone",
        "titel": {
          "de": "Erledige für eine Risikoperson den Einkauf"
        }
      }, {
        "beschreibung": {
          "de": " Spürst du schon den großen Drang dich zu bewegen, weißt aber nicht wie? Auf Youtube gibt es tolle Homeworkouts. Alternativ könntest du auch einen großen Frühlingsputz machen, dass ist mindestens genauso anstrengend."
        },
        "id": "leer",
        "category": "dontgocrazymove",
        "titel": {
          "de": "Ein bisschen Bewegung tut ganz gut"
        }
      }, {
        "beschreibung": {
          "de": "Was ist dein absolutes Lieblingsessen aus der Kindheit. Nudeln mit Tomatensauce und Fleischbällchen? Pizza?... Wäre es nicht schön, wenn es dieses besondere Gericht in den nächsten Tagen bei dir zuhause mal geben würde?"
        },
        "id": "leer",
        "category": "dontgocrazymeal",
        "titel": {
          "de": "Essen wie bei Mama"
        }
      }, {
        "beschreibung": {
          "de": "Wenn du dir deinen Essensvorrat anschaust, gibt es dann Lebensmittel, die schon länger im Schrank liegen und sich darauf freuen würden verbraucht zu werden? Auch aus Resten kann ein echtes Gourmet-Essen entstehen."
        },
        "id": "leer",
        "category": "dontgocrazymeal",
        "titel": {
          "de": "Kein Essen in die Tonne"
        }
      }
    ];

    console.log('data', data);

    data.forEach(element => {
      // this.challengeRef.add(element);
    });
  }
}
