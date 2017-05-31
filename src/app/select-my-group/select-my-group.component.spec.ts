import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMyGroupComponent } from './select-my-group.component';

describe('SelectMyGroupComponent', () => {
  let component: SelectMyGroupComponent;
  let fixture: ComponentFixture<SelectMyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
