import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareupHomeComponent } from './careup-home.component';

describe('CareupHomeComponent', () => {
  let component: CareupHomeComponent;
  let fixture: ComponentFixture<CareupHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareupHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
