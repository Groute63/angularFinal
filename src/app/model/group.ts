export interface Group {
  id ?: number;
  name : string;
  students : Student[];
}

export interface Student {
  id ?: number;
  name: string;
  birthdate ?: string;
  number: string
  groupId:string
}

export interface GroupThisStudents {
  students: Student[];
}
