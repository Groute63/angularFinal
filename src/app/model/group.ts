export interface Group {
  id : number;
  name: string;
}

export interface Student {
  id: number;
  name: string;
  birthdate: Date;
  number: string
}

export interface GroupThisStudents {
  students: Student[];
}
