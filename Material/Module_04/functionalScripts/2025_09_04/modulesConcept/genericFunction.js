export default class Superhero {
    constructor (heroName, realName) {
        this.hn = heroName
        this.rn = realName
    }
}


export function printName (superhero) {
    console.log(`The superhero is ${superhero.hn}`);
}

export function realName (superhero) {
    console.log(`The real name is ${superhero.rn}`);
}