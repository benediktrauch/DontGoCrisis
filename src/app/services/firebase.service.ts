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

  constructor(private angularFirestore: AngularFirestore) {
    this.blogRef = angularFirestore.collection('blog');
    this.categoryRef = angularFirestore.collection('category');
    this.challengeRef = angularFirestore.collection('challenge');
    this.moodRef = angularFirestore.collection('mood');
    this.ressourciumRef = angularFirestore.collection('ressourcium');

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

  getChallengeByCategory(category) {
    if (category.lenght > 0) {
      return this.angularFirestore.collection('challenge', ref => ref.where('category', '==', category));
    } else {
      return this.challengeRef;
    }
  }

  submitSentiment(sentiment) {
    return this.moodRef.add(sentiment);
  }
}
