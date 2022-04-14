export interface TableHeaderItem {
  type: string;
  title?: string;
}

export interface TableBodyTypes {
  icons?: boolean;
  textFields: string[];
  buttons?: boolean;
  dates?: boolean;
  statistic?: boolean;
}

export interface TableStructure {
  specificClass: string;
  headers: TableHeaderItem[];
  headerIcons: boolean;
  body: TableBodyTypes;
}

export interface TableProps {
  data: any[];
  structure: TableStructure;
}