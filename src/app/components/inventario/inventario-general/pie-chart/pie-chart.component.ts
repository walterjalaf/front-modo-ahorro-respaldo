
import { Component, OnInit } from '@angular/core';
// Necesitamos importar Chart desde chart.js/auto
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  // Atributo que almacena los datos del chart


  ngOnInit(): void {

    // datos
    const data = {
      labels: [
        'Consumo energético Real',

        'Sumatoria Relevamiento'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300,  100],
        backgroundColor: [

          ' rgb(73, 160, 232)',
          'rgb(145, 155, 163)',
        ],
        hoverOffset: 4
      }]
    };
    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'pie' as ChartType, // tipo de la gráfica
      data // datos
    })

  }
   public chart!: Chart;
}

