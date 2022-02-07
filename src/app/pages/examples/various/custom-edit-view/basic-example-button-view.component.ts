import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'basic-example-button-view',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class BasicExampleButtonViewComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`)
          });
        }
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Pritesh ',
      username: 'Pritesh007',
      email: 'Pritxhh@yahoo.com',
      button: 'Button #1',
    },
    {
      id: 2,
      name: 'Abhishek Aryan',
      username: 'Racerakay',
      email: 'Racerakay@gmail.com',
      button: 'Button #2',
    },
    {
      id: 3,
      name: 'Priya Kumar',
      username: 'Pkumar1',
      email: 'Nathan@yesenia.net',
      button: 'Button #3',
    },
    {
      id: 4,
      name: 'Lokesh Gupta',
      username: 'Loki5',
      email: 'Loki5@aol.com',
      button: 'Button #4',
    },
    {
      id: 5,
      name: 'Milan Chaudhary',
      username: 'Mchd45',
      email: 'Mchd45@hotmail.com',
      button: 'Button #5',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
