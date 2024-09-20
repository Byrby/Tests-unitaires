class Tamagocci {
    weight = 5
    happiness = 5
    age = 0
    minWeight = 1
    maxWeight = 10

    eat() {
        this.weight = this.weight + 2
    }

    play() {
        this.weight--
        this.happiness++
    }

    becomeOlder() {
        this.age++
        this.minWeight++
        this.maxWeight++
        this.happiness--
    }

    isDead() {


        if (this.weight < this.minWeight) {
            return true;
        }

        if (this.weight > this.maxWeight) {
            return true;
        }

        if (this.happiness == 0) {
            return true
        }


        return false;
    }

    getPicture() {
        if (this.isDead()) {
            return "pk_dead.gif"
        } else if (this.happiness < 3 || this.weight < this.minWeight + 3 || this.weight > this.maxWeight - 3) {
            return "pk_bad.gif"
        }

        return "pk_good.gif"
    }
}

export default Tamagocci;