import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.scss']
})
export class ChallengeItemComponent implements OnInit {
  @Input() challengeItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
