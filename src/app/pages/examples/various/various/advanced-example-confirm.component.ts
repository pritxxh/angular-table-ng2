import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'advance-example-comfirm',
  template: `
    <ng2-smart-table
      [settings]="settings"
      [source]="source"
      (deleteConfirm)="onDeleteConfirm($event)"
      (editConfirm)="onSaveConfirm($event)"
      (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
  `,
})
export class AdvancedExampleConfirmComponent {

  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
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
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Pritesh ',
      username: 'pritesh007',
      email: 'pritxxh@yahoo.com',
      notShownField: true,
    },
    {
      id: 2,
      name: 'Abhishek Aryan',
      username: 'Racerakay',
      email: 'Racerakay@gmail.com',
      notShownField: true,
    },
    {
      id: 3,
      name: 'Priya Kumar',
      username: 'Pkumar1',
      email: 'Nathan@yesenia.net',
      notShownField: false,
    },
    {
      id: 4,
      name: 'Lokesh Gupta',
      username: 'Loki5',
      email: 'Loki5@aol.com',
      notShownField: false,
    },
    {
      id: 5,
      name: 'Milan Chaudhary',
      username: 'Mchd45',
      email: 'Mchd45@hotmail.com',
      notShownField: false,
    },
    {
      id: 6,
      name: 'Prashant Singh',
      username: 'Psingh34',
      email: 'Psingh34@gmail.com',
      notShownField: false,
    },
    {
      id: 7,
      name: 'Ishita Jones',
      username: 'Ishj1',
      email: 'Ishj1@rediff.com',
      notShownField: false,
    },
    {
      id: 8,
      name: 'Ganesh Lokhandi',
      username: 'Glokhandi08',
      email: 'Glokhandi08@gmail.com',
      notShownField: true,
    },
    {
      id: 9,
      name: 'Mahesh Ramsakha',
      username: 'Mramsakha3245',
      email: 'Mramsakha3245@gmail.com',
      notShownField: false,
    },
    {
      id: 10,
      name: 'Ojas Patel',
      username: 'Opatel',
      email: 'Opatel@yahoo.com',
      notShownField: false,
    },
    {
      id: 11,
      name: 'Yogita Verma',
      username: 'Yverma77',
      email: 'Yverma77@outlook.com',
      notShownField: true,
    }
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
