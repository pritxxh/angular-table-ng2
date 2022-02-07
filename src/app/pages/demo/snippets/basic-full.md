import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-data',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  
  data = [
    {
      id: 1,
      name: "Pritesh ",
      username: "Pritesh007",
      email: "Pritxhh@yahoo.com"
    },
    // ... other rows here
    {
      id: 11,
      name: "Yogita Verma",
      username: "Yverma77",
      email: "Yverma77@outlook.com"
    }
  ];
}
