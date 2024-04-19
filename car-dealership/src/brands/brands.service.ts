import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { create } from 'domain';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime()
    }
]

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand) throw new NotFoundException('Brand is not exits')
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if(brand.id === id){
        brandDB.updateAt = new Date().getTime();
        brandDB = {...brandDB, ...updateBrandDto};
        return brandDB;
      }
      return brand
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id );
  }
}
