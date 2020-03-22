import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolumneItemComponent } from './kolumne-item.component';

describe('KolumneItemComponent', () => {
  let component: KolumneItemComponent;
  let fixture: ComponentFixture<KolumneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolumneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolumneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
