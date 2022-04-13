import { NoteType } from "./notes";

export interface TableHeaderItem {
  type: string;
  title?: string;
  iconSrc?: string;
}

export interface TableStructure {
  specificClass: string;
  headers: TableHeaderItem[];
}

export interface TableProps {
  notes: NoteType[];
  structure: TableStructure;
}