import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KolumneItemDialogComponent } from '../kolumne-item-dialog/kolumne-item-dialog.component';

@Component({
  selector: 'app-kolumne-item',
  templateUrl: './kolumne-item.component.html',
  styleUrls: ['./kolumne-item.component.scss']
})
export class KolumneItemComponent implements OnInit {

  @Input() story: any;
  expanded = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('story', this.story);
  }

  toggleExpand() {
    // this.expanded = !this.expanded;
    const dialogRef = this.dialog.open(KolumneItemDialogComponent, {
      data: this.story
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
