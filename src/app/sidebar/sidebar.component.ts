import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  @Output() active: string = 'reports';

  
  changeActive(a: string): void {
    this.active = a;
  }

  signOut() {
    //signout  
  }

}
