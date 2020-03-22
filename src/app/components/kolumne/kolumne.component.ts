import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-kolumne',
  templateUrl: './kolumne.component.html',
  styleUrls: ['./kolumne.component.scss']
})
export class KolumneComponent implements OnInit {

  kolumne$: Observable<any>;
  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.kolumne$ = this.firebaseService.getKolumneData().valueChanges();
  }

}
