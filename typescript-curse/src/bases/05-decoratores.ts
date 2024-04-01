class NewPokemon {
    constructor(
        public readonly id: Number,
        public name: string,
    ){}

    scream(){
        console.log(`test!!`);
    }

    speak(){
        console.log(`test2!`);
    }
}

const MyDecorator = () => {
    return ( target: Function ) => {
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: Number,
        public name: string,
    ){}

    scream(){
        console.log(`${ this.name.toLocaleUpperCase() }!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();