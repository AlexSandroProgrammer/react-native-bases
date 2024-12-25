export interface User {
  age: number;
  name: string;
  address: Adress;
}

export interface Adress {
  country: string;
  houseNo: number;
  street?: string;
}
