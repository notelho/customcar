import { setForestGround, setIcyGround, setDesertGround } from '../../provider.js'

export class Scenery {

    constructor(tree) {
        this.scenery = 2
        this._tree = tree
    }

    next() {
        switch (this.scenery) {
            case 1:
                setDesertGround()
                this._tree.setStyle('desert')
                this.scenery = 2
                break
            case 2:
                setIcyGround()
                this._tree.setStyle('icy')
                this.scenery = 3
                break
            case 3:
                setForestGround()
                this._tree.setStyle('forest')
                this.scenery = 1
                break
        }
    }
}