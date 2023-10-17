// import { Component } from '@angular/core';
// import {HttpClient} from '@angular/common/http';

// @Component({
// selector: 'app-root',
// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
// })
// export class AppComponent {
// title = 'User';
// data = {}  as any;
//constructor(private http: HttpClient) {
// http.get('resource').subscribe(data => this.data = data);
// }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chartType: string = 'chartJs';

  changeChart() {
    if (this.chartType == 'chartJs') {
      this.chartType = 'Angular Charts';
      return;
    }
    this.chartType = 'chartJs';
  }
}
