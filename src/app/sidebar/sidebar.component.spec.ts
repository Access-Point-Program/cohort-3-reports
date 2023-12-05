import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';


fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('there should be a span class with the title in it', () => {
    const epitet = fixture.nativeElement.querySelector(".title") as HTMLElement
    expect(epitet.textContent).toBe("Super Cool Name");
  });

  it('dashboard page button should be appearing', () => {
    const dashy = fixture.nativeElement.querySelector(".dasher") as HTMLElement
    expect(dashy.textContent).toBe(" Dashboard " );
  });

  it('dashboard should be clickable', () => {
    
    //target the button or save it as a variable
    const dashy = fixture.nativeElement.querySelector(".dasher") as HTMLElement
    //simulation the button being clicked
    dashy.click();
    //update the page
    fixture.detectChanges();
    //check if the active varible changed to the value it should be
    expect(component.active).toBe("d");
  });


  it('reports page button should appear', () => {
    const repo = fixture.nativeElement.querySelector(".repor") as HTMLElement
    expect(repo.textContent).toBe(" Reports " );
  });

  it('reports should be clickable', () => {
    
    //target the button or save it as a variable
    const repo = fixture.nativeElement.querySelector(".repor") as HTMLElement
    //simulation the button being clicked
    repo.click();
    //update the page
    fixture.detectChanges();
    //check if the active varible changed to the value it should be
    expect(component.active).toBe("r");
  });

  it('simulations page button should appear', () => {
    const simi = fixture.nativeElement.querySelector(".simulate") as HTMLElement
    expect(simi.textContent).toBe(" Simulation " );
  });

  it('simulations should be clickable', () => {
    
    //target the button or save it as a variable
    const simi = fixture.nativeElement.querySelector(".simulate") as HTMLElement
    //simulation the button being clicked
    simi.click();
    //update the page
    fixture.detectChanges();
    //check if the active varible changed to the value it should be
    expect(component.active).toBe("s");
  });

  it('sign out button/tag should appear', () => {
    const goodbye = fixture.nativeElement.querySelector(".leave") as HTMLElement
    expect(goodbye.textContent).toBe("Sign Out");
  });

  

  

  
});
