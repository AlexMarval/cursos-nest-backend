import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class pokemon {
    
    get imageUrl(): string{
        return `http://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public id: Number, 
        public name: string
    ) {}

    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`);
        console.log(data.moves)
        return data.moves;
    }
}

export const charmander = new pokemon(3, 'charmander');
charmander.getMoves()