import { Injectable } from '@angular/core';

@Injectable()
export class ChartsService {

  private pieOption = {
    backgroundColor: '#ffffff',
    toolbox: {
      show : true,
      feature : {
        restore : {show: true},
        saveAsImage : {show: true},
      },
    },
    series: [{
      type: 'pie',
      name: '',
      radius: [120, 200],
      hoverAnimation: false,
      silent: true,
      clockwise: false,
      data: [{
        value: 0,
        name: '',
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: '情感辨析',
            color: '#222',
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
        itemStyle: {
          normal: {
            color: '#ccc',
            shadowBlur: 50,
            shadowColor: 'yellow',
            show: true,
          },
        },
      }],
    },

      {
        type: 'pie',
        radius: [120, 120],
        hoverAnimation: false,
        silent: true,
        data: [{
          value: 0,
          name: '大',
          label: {
            normal: {
              show: true,
              position: 'center',
              formatter: '\n\n\n\n积极or消极',
              color: '#222',
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          itemStyle: {
            normal: {
              color: '#ccc',
              shadowBlur: 50,
              shadowColor: 'yellow',
            },
          },
        }],
      }, {
        type: 'pie',
        radius: [130, 190],
        hoverAnimation: false,
        data: [{
          value: 3000,
          name: '消极度',
          label: {
            normal: {
              color: '#222',
              fontSize: 16,
              formatter: '{b}：{c}\n\n比例：{d}%',
            },
          },
          labelLine: {
            normal: {
              length: 60,
            },
          },
        }, {
          value: 5170,
          name: '积极度',
          label: {
            normal: {
              color: '#222',
              fontSize: 16,
              formatter: '{b}：{c}\n\n比例：{d}%',
            },
          },
          labelLine: {
            normal: {
              length: 60,
            },
          },
        }],
      },
    ],
  };

  constructor() {
  }

  // TODO: observables
  getPieData() {
    return this.pieOption;
  }
}
