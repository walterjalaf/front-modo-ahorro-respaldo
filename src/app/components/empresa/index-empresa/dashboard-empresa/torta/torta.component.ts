import { Component, OnInit } from '@angular/core';
// Necesitamos importar Chart desde chart.js/auto
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrl: './torta.component.css'
})
export class TortaComponent implements OnInit {

  // Atributo que almacena los datos del chart


  ngOnInit(): void {

    // datos
    const data = {
      labels: [
        'Gas Natural',
        'Energía Eléctrica',

      ],
      datasets: [{
        label: 'My First Dataset',
        data: [79,  21],
        backgroundColor: [

          ' rgb(255, 222, 89)',
          'rgb(239, 19, 19)',
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

