import { FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
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

export interface TreeElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  children?: TreeElement[];
}

const TREE_DATA: TreeElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', children: [{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }] },

  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    children: [{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B', children: [{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }] }],
  },

  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    children: [
      {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        children: [
          {
            position: 8,
            name: 'Oxygen',
            weight: 15.9994,
            symbol: 'O',
            children: [
              { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
              { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
            ],
          },
        ],
      },
    ],
  },
];

interface TreeFlatNode {
  expandable: boolean;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  level: number;
}

@Component({
  selector: 'app-table-overview',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss'],
})
export class TableOverviewComponent implements OnInit {
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
  treeTableColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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

  treeControl = new FlatTreeControl<TreeFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    (node: TreeElement, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        ...node,
        level: level,
      };
    },
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  treeTableDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {}

  ngOnInit(): void {
    this.treeTableDataSource.data = TREE_DATA;
    this.dataSource = this.computeData(ELEMENT_DATA, ['col1', 'col2']);
  }

  ngAfterViewChecked(): void {
    this.showData();
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
