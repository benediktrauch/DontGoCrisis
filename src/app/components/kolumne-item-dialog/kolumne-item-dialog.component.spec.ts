import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolumneItemDialogComponent } from './kolumne-item-dialog.component';

describe('KolumneItemDialogComponent', () => {
  let component: KolumneItemDialogComponent;
  let fixture: ComponentFixture<KolumneItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolumneItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolumneItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
