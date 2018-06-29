import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsCreateComponent } from './contracts-create.component';

describe('ContractsCreateComponent', () => {
  let component: ContractsCreateComponent;
  let fixture: ComponentFixture<ContractsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
