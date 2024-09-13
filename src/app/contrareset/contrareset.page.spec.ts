import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContraresetPage } from './contrareset.page';

describe('ContraresetPage', () => {
  let component: ContraresetPage;
  let fixture: ComponentFixture<ContraresetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraresetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
