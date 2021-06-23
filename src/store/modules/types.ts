export interface Student {
      id: number;
      first_name: string;
      last_name: string;
      emailId: string;
      phone_number: string;
      year_of_passing:string;
    
}

export interface StudentListState {
    student?: Student;
}
