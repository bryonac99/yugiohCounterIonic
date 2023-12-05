import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GameTablePage } from './game-table.page';

describe('GameTablePage', () => {
  let component: GameTablePage;
  let fixture: ComponentFixture<GameTablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
