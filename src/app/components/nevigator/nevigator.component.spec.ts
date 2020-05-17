import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevigatorComponent } from './nevigator.component';

describe('NevigatorComponent', () => {
  let component: NevigatorComponent;
  let fixture: ComponentFixture<NevigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
