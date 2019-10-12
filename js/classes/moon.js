import { moonFrame } from '../providers/providers.js'
import { Abstract } from './abstract.js'

export class Moon extends Abstract {

    constructor() {

        super()._ref = document.querySelector(".moon")

        this.style('boxShadow', moonFrame)
    }

}