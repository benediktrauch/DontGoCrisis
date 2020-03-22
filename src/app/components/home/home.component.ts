import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blog$: Observable<any>;
  category$: Observable<any>;
  challenge$: Observable<any>;
  challengeByCategory$: Observable<any>;
  mood$: Observable<any>;
  ressourcium$: Observable<any>;

  whatToDo: string;
  challengeType: string;
  helpingType: string;

  dailyData = {
    blog: 0,
    challenge: 0,
    ressourcium: 0
  };


  length = {
    blog: 0,
    challenge: 0,
    ressourcium: 0
  };

  random = true;
  challengeAccepted = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {

    const date = new Date();
    const days = Math.round((date.getTime() - 1584828878093) / (1000 * 60 * 60 * 24));
    // console.log('days', days);

    this.blog$ = this.firebaseService.getBlogData().valueChanges();
    this.category$ = this.firebaseService.getCategoryData().valueChanges();
    this.challenge$ = this.firebaseService.getChallengeData().valueChanges();
    this.mood$ = this.firebaseService.getMoodData().valueChanges();
    this.ressourcium$ = this.firebaseService.getRessourciumData().valueChanges();
    this.challengeByCategory$ = this.firebaseService.getChallengeByCategory(this.challengeType).valueChanges();


    this.blog$.subscribe((res) => {
      // console.log('res', res.length);
      this.length.blog = res.length;
      this.dailyData.blog = days % res.length;
      if (this.random) {
        this.dailyData.blog = Math.floor(Math.random() * res.length);
      }
      // res.forEach(element => {
      //   console.log('element', element);
      // });
    });
    // this.challenge$.subscribe((res) => {
    //   // console.log('res', res.length);
    //   this.dailyData.challenge = days % res.length;
    //   if (this.random) {
    //     this.dailyData.challenge = Math.floor(Math.random() * res.length);
    //   }
    //   // res.forEach(element => {
    //   //   console.log('element', element);
    //   // });
    // });
    // this.challengeByCategory$.subscribe((res) => {
    //   console.log('res', res);
    //   this.dailyData.challenge = days % res.length;
    //   if (this.random) {
    //     this.dailyData.challenge = Math.floor(Math.random() * res.length);
    //   }
    //   // res.forEach(element => {
    //   //   console.log('element', element);
    //   // });
    // });

    this.ressourcium$.subscribe((res) => {
      this.length.ressourcium = res.length;
      this.dailyData.ressourcium = days % res.length;
      if (this.random) {
        this.dailyData.ressourcium = Math.floor(Math.random() * res.length);
      }
      // res.forEach(element => {
      //   console.log('element', element);
      // });
    });

    this.mood$.subscribe((res) => {
      // console.log('res', res);
      res.forEach(element => {
        // console.log('element', element);
      });
    });

    // this.category$.subscribe((res) => {
    //   console.log('res', res);
    //   res.forEach(element => {
    //     console.log('element', element);
    //   });
    // });
  }

  handleChallengeMapping() {
    const date = new Date();
    const days = Math.round((date.getTime() - 1584828878093) / (1000 * 60 * 60 * 24));
    this.challengeByCategory$ = this.firebaseService.getChallengeByCategory(this.challengeType).valueChanges();

    this.challengeByCategory$.subscribe((res) => {
      console.log('res', res);
      this.length.challenge = res.length;
      this.dailyData.challenge = days % res.length;
      if (this.random) {
        this.dailyData.challenge = Math.floor(Math.random() * res.length);
      }
    });
  }

  getNew(resource, data) {
    const date = new Date();
    const days = Math.round((date.getTime() - 1584828878093) / (1000 * 60 * 60 * 24));
    const lastNumber = this.dailyData;

    this.dailyData.challenge = Math.floor(Math.random() * this.length.challenge);
    this.dailyData.blog = Math.floor(Math.random() * this.length.blog);
    this.dailyData.ressourcium = Math.floor(Math.random() * this.length.ressourcium);
  }

  selectDoing(choice) {
    this.whatToDo = choice;
    // this.challengeType = null;
    this.challengeAccepted = false;
  }

  selectChallengeType(choice) {
    this.challengeType = choice;
    this.handleChallengeMapping();

    this.challengeAccepted = true;
  }

  // selectHelping(choice) {
  //   this.helpingType = choice;
  //   this.challengeByCategory$ = this.firebaseService.getChallengeByCategory(this.challengeType).valueChanges();
  // }

}
