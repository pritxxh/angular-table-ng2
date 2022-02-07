import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-custom-actions',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data" (custom)="onCustom($event)"></ng2-smart-table>
  `,
})
export class BasicExampleCustomActionsComponent {

  settings = {
    actions: {
      custom: [
        {
          name: 'view',
          title: 'View ',
        },
        {
          name: 'edit',
          title: 'Edit ',
        },
        {
          name: 'delete',
          title: 'Delete ',
        },
        {
          name: 'duplicate',
          title: 'Duplicate ',
        },
      ],
    },
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
      }
    },
  };

  data = [
    {
      id: 1,
      name: 'Pritesh ',
      username: 'Pritesh007',
      email: 'Pritxhh@yahoo.com',
    },
    {
      id: 2,
      name: 'Abhishek Aryan',
      username: 'Racerakay',
      email: 'Racerakay@gmail.com',
    },
    {
      id: 3,
      name: 'Priya Kumar',
      username: 'Pkumar1',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Lokesh Gupta',
      username: 'Loki5',
      email: 'Loki5@aol.com',
    },
    {
      id: 5,
      name: 'Milan Chaudhary',
      username: 'Mchd45',
      email: 'Mchd45@hotmail.com',
    },
  ];

  onCustom(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }
}
