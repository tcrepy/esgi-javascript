Object.prototype.prop_access = function (path) {

    let input = this;
    let pathArray = path.split('.');
    for (let i = 0; i < pathArray.length; i++) {
        if (input[pathArray[i]] === undefined) {
            console.log("path not exist");
            return null
        }
        input = input[pathArray[i]];
    }
    return input;
};

var propAccess = {
    animal: {
        type: {
            name: 'Chien'
        }
    }
}.prop_access("animal.type.name");

console.log(propAccess);