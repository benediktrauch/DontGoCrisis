import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kolumne-item-dialog',
  templateUrl: './kolumne-item-dialog.component.html',
  styleUrls: ['./kolumne-item-dialog.component.scss']
})
export class KolumneItemDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KolumneItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public story: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
