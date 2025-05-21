import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocComponent } from './admin-doc.component';

describe('AdminDocComponent', () => {
  let component: AdminDocComponent;
  let fixture: ComponentFixture<AdminDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
