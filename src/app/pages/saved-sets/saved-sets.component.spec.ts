import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSetsComponent } from './saved-sets.component';

describe('SavedSetsComponent', () => {
  let component: SavedSetsComponent;
  let fixture: ComponentFixture<SavedSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
