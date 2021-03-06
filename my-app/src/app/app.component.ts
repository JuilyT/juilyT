import { Component,OnInit } from '@angular/core';
import { AppComponent2 } from './app.component2';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-juily';
  private chartData: Array<any>;
  constructor(){}
  ngOnInit() {
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        setTimeout(() => {
          this.generateData();    
          // change the data periodically
          setInterval(() => this.generateData(), 3000);
        }, 1000);
  }    
  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}
