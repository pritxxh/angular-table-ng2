import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-multi-select',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class BasicExampleMultiSelectComponent {

  settings = {
    selectMode: 'multi',
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
    {
      id: 6,
      name: 'Prashant Singh',
      username: 'Psingh34',
      email: 'Psingh34@gmail.com',
    },
    {
      id: 7,
      name: 'Ishita Jones',
      username: 'Ishj1',
      email: 'Ishj1@rediff.com',
    },
    {
      id: 8,
      name: 'Ganesh Lokhandi',
      username: 'Glokhandi08',
      email: 'Glokhandi08@gmail.com',
    },
    {
      id: 9,
      name: 'Mahesh Ramsakha',
      username: 'Mramsakha3245',
      email: 'Mramsakha3245@gmail.com',
    },
    {
      id: 10,
      name: 'Ojas Patel',
      username: 'Opatel',
      email: 'Opatel@yahoo.com',
    },
    {
      id: 11,
      name: 'Yogita Verma',
      username: 'Yverma77',
      email: 'Yverma77@outlook.com',
    },
  ];
}
