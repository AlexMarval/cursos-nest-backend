import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep'];

    @Get()
    getAllCars(){
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param('id') id: string) {
        console.log({ id: +id })

        if((+id + 1) == null ) return { id: null, message: "id is not a number" }
        if(this.cars.length < +id) return { id: null, message: "id not exist" };
        
        return this.cars[+id];
    }
}
