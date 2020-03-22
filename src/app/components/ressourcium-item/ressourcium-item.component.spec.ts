import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourciumItemComponent } from './ressourcium-item.component';

describe('RessourciumItemComponent', () => {
  let component: RessourciumItemComponent;
  let fixture: ComponentFixture<RessourciumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourciumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourciumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
