import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ressourcium-item',
  templateUrl: './ressourcium-item.component.html',
  styleUrls: ['./ressourcium-item.component.scss']
})
export class RessourciumItemComponent implements OnInit {
  @Input() ressourciumItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
