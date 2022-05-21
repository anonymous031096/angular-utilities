import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { get, set } from 'lodash';

const ELEMENT_DATA: any[] = [
  {
    col1: 'Row 1 Big',
    col2: 'Row 1 Big',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
    groupCell: {
      col1: {
        rowspan: 1,
        colspan: 2,
      },
      col2: {
        hidden: true,
      },
    },
  },
  {
    col1: 'Row 2 Big',
    col2: 'Row 2 Big',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
  },
  {
    col1: 'Row 2 Big',
    col2: 'Row 2 Big',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
  },
  {
    col1: 'Row 3 Big',
    col2: 'Row 3',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
  },
  {
    col1: 'Row 3 Big',
    col2: 'Row 4',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
  },
  {
    col1: 'Row 3 Big',
    col2: 'Row 5',
    col3: 50,
    col4: 50,
    col5: 50,
    col6: 50,
    col7: 50,
    col8: 50,
    col9: 50,
    col10: 50,
    col11: 50,
    col12: 50,
    col13: 50,
    col14: 50,
    col15: 50,
    col16: 50,
    col17: 50,
  },
];

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss'],
})
export class TableOverviewComponent implements OnInit, AfterViewChecked {
  displayedColumns: string[] = [
    'col1',
    'col2',
    'col3',
    'col4',
    'col5',
    'col6',
    'col7',
    'col8',
    'col9',
    'col10',
    'col11',
    'col12',
    'col13',
    'col14',
    'col15',
    'col16',
    'col17',
  ];
  dataSource: any[] = [];

  headerGrid = [
    [
      { colspan: 2, rowspan: 3, name: 'Row 1 Col 1', sticky: true },
      { colspan: 4, rowspan: 1, name: 'Row 1 Col 2' },
      { colspan: 1, rowspan: 3, name: 'Row 1 Col 3' },
      { colspan: 3, rowspan: 1, name: 'Row 1 Col 4' },
      { colspan: 2, rowspan: 1, name: 'Row 1 Col 5' },
      { colspan: 3, rowspan: 1, name: 'Row 1 Col 6' },
      { colspan: 2, rowspan: 1, name: 'Row 1 Col 7' },
    ],
    [
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 1' },
      { colspan: 2, rowspan: 1, name: 'Row 2 Col 2' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 3' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 4' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 5' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 6' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 7' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 8' },
      { colspan: 2, rowspan: 1, name: 'Row 2 Col 9' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 10' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 11' },
      { colspan: 1, rowspan: 2, name: 'Row 2 Col 12' },
    ],
    [
      { colspan: 1, rowspan: 1, name: 'Row 3 Col 1' },
      { colspan: 1, rowspan: 1, name: 'Row 3 Col 2' },
      { colspan: 1, rowspan: 1, name: 'Row 3 Col 3' },
      { colspan: 1, rowspan: 1, name: 'Row 3 Col 4' },
    ],
  ];

  constructor() {}
  ngAfterViewChecked(): void {
    this.showData();
  }

  ngOnInit(): void {
    this.dataSource = this.computeData(ELEMENT_DATA, ['col1', 'col2']);
  }

  getHeaderRowName(rowIndex: number, row: any[]) {
    return row.map((v, i) => `headerRow${rowIndex}Col${i + 1}`);
  }

  computeData(data: any[], groupFields: string[]): any[] {
    return data.map((v, i, a) => {
      const groupCell = {} as any;
      for (const [j, groupField] of groupFields.entries()) {
        if (get(a, `[${i - 1}].${groupField}`) === get(v, groupField) || get(a, `[${i}].${groupFields[j - 1]}`) === get(v, groupField)) {
          set(groupCell, `${groupField}.hidden`, true);
          continue;
        }

        let rowspan = 1;
        for (let k = i + 1; k < a.length; k++) {
          if (get(a, `[${k}].${groupField}`) !== get(v, groupField)) break;
          rowspan++;
        }
        set(groupCell, `${groupField}.rowspan`, rowspan);

        let colspan = 1;
        for (let k = j + 1; k < groupFields.length; k++) {
          if (get(a, `[${i}].${groupFields[k]}`) !== get(v, groupField)) break;
          colspan++;
        }
        set(groupCell, `${groupField}.colspan`, colspan);
      }

      return { ...v, groupCell };
    });
  }

  showData() {
    const mainContainer = document.getElementById('myData');
    if (mainContainer) {
      const txt: string = JSON.stringify(this.dataSource, null, 2);
      set(mainContainer, 'innerText', txt);
    }
  }
}
