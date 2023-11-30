import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingcompComponent } from './testingcomp.component';

describe('TestingcompComponent', () => {
  let component: TestingcompComponent;
  let fixture: ComponentFixture<TestingcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingcompComponent]
    });
    fixture = TestBed.createComponent(TestingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
