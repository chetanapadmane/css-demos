import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShodowstyleComponent } from './box-shodowstyle.component';

describe('BoxShodowstyleComponent', () => {
  let component: BoxShodowstyleComponent;
  let fixture: ComponentFixture<BoxShodowstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxShodowstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxShodowstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
