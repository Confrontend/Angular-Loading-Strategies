/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreOneComponent } from './pre-one.component';

describe('PreOneComponent', () => {
  let component: PreOneComponent;
  let fixture: ComponentFixture<PreOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
