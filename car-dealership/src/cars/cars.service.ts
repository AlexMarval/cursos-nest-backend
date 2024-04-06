import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corrolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 2,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(item => item.id === id)
        
        if(car != null)
            return car;
        else
            return new BadRequestException();
    }
}
