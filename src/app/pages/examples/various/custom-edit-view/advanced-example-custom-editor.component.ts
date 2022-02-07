import { Component } from '@angular/core';

import { CustomEditorComponent } from './custom-editor.component';
import { CustomRenderComponent } from './custom-render.component';
import { CustomFilterComponent } from './custom-filter.component';

@Component({
  selector: 'advanced-example-custom-editor',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class AdvancedExamplesCustomEditorComponent {

  data = [
    {
      id: 1,
      name: 'Pritesh ',
      username: 'Pritesh007',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 2,
      name: 'Abhishek Aryan',
      username: 'Racerakay',
      link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
    },
    {
      id: 3,
      name: 'Priya Kumar',
      username: 'Pkumar1',
      link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
    },
    {
      id: 4,
      name: 'Lokesh Gupta',
      username: 'Loki5',
      link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: {
          type: 'custom',
          component: CustomFilterComponent
        }
      },
      name: {
        title: 'Full Name',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      username: {
        title: 'User Name',
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
    },
  };
}
