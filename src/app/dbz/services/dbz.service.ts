import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    constructor() {}

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    newCharacter( character: Character ): void {
        console.log('Main page character ', character);

        const newCharacter: Character = { ...character, id: uuid() };

        this.characters.push(newCharacter);
    }

    // console.log('Character to delete ', index);
    // this.characters.splice(characterIndex, 1);
    // this.characters.forEach((character, i) => {
    //     if (index === i) {
    //         console.log(this.characters[i]);
    //         this.characters.splice(index, 1);
    //     } 
    // });
    deleteCharacter(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id);
        console.log('Filtered characters ', this.characters);


    }

}