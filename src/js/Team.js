import { Character } from "./Character"

class Team {
    constructor() {
        this.members = []
    }

    add(character) {
        if (character instanceof Character) {
            this.members.push(character)
        } else {
            throw new Error("You can add objects only type of Character")
        }
    }

    [Symbol.iterator]() {
        index = 0
        const members = this.members
        return {
            next() {
                if (index < members.length) {
                    return { value: members[index++], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}