import { Tranee } from './tranee-model';
export interface Emplyee {
    Id: number;
    department: string;
    Manager: Tranee[];
  }