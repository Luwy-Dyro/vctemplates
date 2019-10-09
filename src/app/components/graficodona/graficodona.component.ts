import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {


  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  //   [50, 150, 120],
  //   [250, 130, 70],
  // ];
  // public doughnutChartType: ChartType = 'doughnut';
  /*Model 2*/ 
  // doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // doughnutChartData: number[] = [350, 450, 100];
  // doughnutChartType: string = 'doughnut';

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

/*Modelo 2 CHart */ 

// @Input('chartLabels') doughnutChartLabels: Label[] = [];
// @Input('chartData') doughnutChartData: MultiDataSet = [];
// @Input('chartType') doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}
