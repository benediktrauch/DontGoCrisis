import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  kolumnen = [
    {
      img: '123',
      name: 'Name 1',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Cum ea consequatur dignissimos vitae, temporibus nostrum.
      Nulla illo, odio nemo sit iure atque optio accusamus nihil doloremque, obcaecati provident reprehenderit eligendi!`
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
