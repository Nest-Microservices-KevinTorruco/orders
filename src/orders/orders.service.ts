
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    constructor() { }

    create(createOrderDto: CreateOrderDto){
        return 'This Action add a new order';
    }

    findAll(){
        return `This action returns all orders`;
   
    }

    findOne(id:number){
        return `This action returns a #${id}`;
    }

    
}