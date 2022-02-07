import { Component } from '@angular/core';

@Component({
  selector: 'advanced-example-types',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class AdvancedExamplesTypesComponent {

  data = [
    {
      id: 1,
      name: 'Pritesh ',
      username: 'Pritesh007',
      email: 'Pritxhh@yahoo.com',
      comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
      passed: 'Yes',
    },
    {
      id: 2,
      name: 'Abhishek Aryan',
      username: 'Racerakay',
      email: 'Racerakay@gmail.com',
      comments: `Vix iudico graecis in? Malis eirmod consectetuer duo ut?
                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.`,
      passed: 'Yes',
    },
    {
      id: 3,
      name: 'Priya Kumar',
      username: 'Pkumar1',
      email: 'Nathan@yesenia.net',
      comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
      passed: 'No',
    },
    {
      id: 4,
      name: 'Lokesh Gupta',
      username: 'Loki5',
      email: 'Loki5@aol.com',
      comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Milan Chaudhary',
      username: 'Mchd45',
      email: 'Mchd45@hotmail.com',
      comments: `Quo viris appellantur an, pro id eirmod oblique iuvaret,
                timeam omittam comprehensam ad eam? Eos id dico gubergren,
                cum dicant qualisque ea, id vim ferri moderatius?`,
      passed: 'No',
    },
    {
      id: 6,
      name: 'Prashant Singh',
      username: 'Psingh34',
      email: 'Psingh34@gmail.com',
      comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
      passed: 'No',
    },
    {
      id: 7,
      name: 'Ishita Jones',
      username: 'Ishj1',
      email: 'Ishj1@rediff.com',
      comments: `Mel dicat sanctus accusata ut! Eu sit choro vituperata,
                qui cu quod gubergren elaboraret, mollis vulputate ex cum!`,
      passed: 'Yes',
    },
    {
      id: 8,
      name: 'Ganesh Lokhandi',
      username: 'Glokhandi08',
      email: 'Glokhandi08@gmail.com',
      comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
      passed: 'No',
    },
    {
      id: 9,
      name: 'Mahesh Ramsakha',
      username: 'Mramsakha3245',
      email: 'Mramsakha3245@gmail.com',
      comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Ojas Patel',
      username: 'Opatel',
      email: 'Opatel@yahoo.com',
      comments: `Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.
                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?`,
      passed: 'Yes',
    },
    {
      id: 11,
      name: 'Yogita Verma',
      username: 'Yverma77',
      email: 'Yverma77@outlook.com',
      comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
      passed: 'No',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.data,
              searchFields: 'name',
              titleField: 'name',
              descriptionField: 'email',
            },
          },
        },
      },
      username: {
        title: 'User Name',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Racerakay', title: 'Racerakay' }, { value: 'Pritesh007', title: 'Pritesh007' }, {
              value: '<b>Pkumar1</b>',
              title: 'Pkumar1',
            }],
          },
        },
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      comments: {
        title: 'Comments',
        editor: {
          type: 'textarea',
        },
      },
      passed: {
        title: 'Passed',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Yes',
            false: 'No',
          },
        },
      },
    },
  };
}
