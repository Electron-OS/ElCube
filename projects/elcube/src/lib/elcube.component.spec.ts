import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElcubeComponent } from './elcube.component';

describe('ElcubeComponent', () => {
  let component: ElcubeComponent;
  let fixture: ComponentFixture<ElcubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElcubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
