import { Table } from './table.model';

export interface Standings {
    stage: string;
    type: string;
    table: Table[];
}
