import { Injectable } from '@nestjs/common';
//import { BRANDS_SEED } from './data/brands.seed';
//import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  populateDB() {
    //BRANDS_SEED
    //CARS_SEED
    return `Execute seed successful`;
  }
}
