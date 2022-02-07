import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-filters',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class AdvancedExampleFiltersComponent {

  data = [
    {
      id: 4,
      name: 'Lokesh Gupta',
      email: 'Loki5@aol.com',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Milan Chaudhary',
      email: 'Mchd45@hotmail.com',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Prashant Singh',
      email: 'Psingh34@gmail.com',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Ishita Jones',
      email: 'Ishj1@rediff.com',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Ganesh Lokhandi',
      email: 'Glokhandi08@gmail.com',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Mahesh Ramsakha',
      email: 'Mramsakha3245@gmail.com',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Ojas Patel',
      email: 'Opatel@yahoo.com',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Yogita Verma',
      email: 'Yverma77@outlook.com',
      passed: 'Yes',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Mahesh Ramsakha', title: 'Mahesh Ramsakha' },
              { value: 'Ishita Jones', title: 'Ishita Jones' },
              { value: 'Milan Chaudhary', title: 'Milan Chaudhary' },
            ],
          },
        },
      },
      email: {
        title: 'Email',
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.data,
              searchFields: 'email',
              titleField: 'email',
            },
          },
        },
      },
      passed: {
        title: 'Passed',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
            resetText: 'clear',
          },
        },
      },
    },
  };
}
