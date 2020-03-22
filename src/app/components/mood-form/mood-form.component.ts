import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mood-form',
  templateUrl: './mood-form.component.html',
  styleUrls: ['./mood-form.component.scss']
})
export class MoodFormComponent implements OnInit {

  submitted = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  submitSentiment(sentimentStr) {
    console.log('sentiment', sentimentStr);
    this.firebaseService.submitSentiment({ sentiment: sentimentStr, timestamp: new Date().getTime() })
      .then(res => {
        this.submitted = true;
      });
  }

}
