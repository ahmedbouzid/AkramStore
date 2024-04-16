export class User {
  name ?: string ;
  password ?: string ;
  uploadPhoto ?: string;
  role ?: string ;
  mobileNumber ?: string ;
  adresse ?:Adresse ;
  gender ?:string ;
  language?:string;
  dob?:string;
  agreeTc ?:boolean ;
  age ?:number;
  aboutYou ?:string ;
  email?: string
}


export class Adresse {
  id ?:number ;
  adresseOne?:string ;
  adresseTwo?:string ;
  city?:string ;
  state?:string ;
  zipCode?:string ;

}
