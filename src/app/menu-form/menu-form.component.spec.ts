import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { Layout } from '../layout';
import { Ruleset } from '../Ruleset';
import { MenuFormComponent } from './menu-form.component';

describe('MenuFormComponent', () => {
  let component: MenuFormComponent;
  let fixture: ComponentFixture<MenuFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFormComponent],
    

    });
    fixture = TestBed.createComponent(MenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render a form,', () => {
    expect(MenuFormComponent).toBeTruthy();

  });
  it('should show list of layouts',() => {
  const mockMenuFormComponent: Layout[] =[{name: 'mock', id:2, creation_date:10}];
  component.Layouts =mockMenuFormComponent;
  fixture.detectChanges();
  expect(component.Layouts).toBe(mockMenuFormComponent) //from line 16
  
});
it('should show list of rulesets',() => {
  const mockMenuFormComponent: Ruleset[] =[{name: 'mock', id:4, creation_date:7}];
  component.Rulesets =mockMenuFormComponent;
  fixture.detectChanges();
  expect(component.Rulesets).toEqual(mockMenuFormComponent);
});
});
