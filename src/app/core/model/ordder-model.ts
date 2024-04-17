import { Product } from "./product-model";
import { Adresse } from "./user-model";

export class Order {
  id?:number;
  userId?:number;
  sellerId?:number;
  product ?: Product ;
  deliveryAddresse ?: Adresse ;
  contact ?:number ;
  dataTime?:string ;
}
