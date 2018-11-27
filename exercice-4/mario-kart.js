let Pilote = function (nom) {
    this.nom = nom;
    var state;
    this.getState = function () {
        return this.state;
    }
};

Pilote.prototype.receiveData = function (data) {
    console.log("receive from : " + data.origin + ", " + data.state);
    this.state = data.state;
};

Pilote.prototype.speak = function () {
    let pilote = this;
    switch (pilote.state) {
        case "ready":
            return "Here we go!";
        case "happy":
            return "Let's have some fun!";
        case "sad":
            return "Outch!!! Damn {origin}";
        case "normal":
            return "";
    }
};

Pilote.prototype.needUpdate = function () {
    let pilote = this;
}

let Vehicule = function () {
    var distance;
    this.setDistance = function(distance) {
        this.distance = distance;
    };
    this.getDistance = function() {
        return this.distance;
    };
    var ride = function(distance) {
        if (distance === 0 ){
            this.pilote.state = "ready"
        } else {
            this.pilote.state = "normal"
        }
        this.setDistance(distance + this.getDistance());
    };
    var getWeapon = function(weapon) {
        this.pilote.state = "happy";
        this.ride();
    }
};

Vehicule.prototype.init = function (conf) {
    let vehicule = this;
    //pilote, numero, arme, distance
}

Vehicule.prototype.receiveData = function (data) {
    let vehicule = this;
}

Vehicule.prototype.needUpdate = function () {

}