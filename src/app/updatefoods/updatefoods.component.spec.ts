import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefoodsComponent } from './updatefoods.component';

describe('UpdatefoodsComponent', () => {
  let component: UpdatefoodsComponent;
  let fixture: ComponentFixture<UpdatefoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
