import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdataComponent } from './parentdata.component';

describe('ParentdataComponent', () => {
  let component: ParentdataComponent;
  let fixture: ComponentFixture<ParentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
