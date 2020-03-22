import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolumneComponent } from './kolumne.component';

describe('KolumneComponent', () => {
  let component: KolumneComponent;
  let fixture: ComponentFixture<KolumneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolumneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolumneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
