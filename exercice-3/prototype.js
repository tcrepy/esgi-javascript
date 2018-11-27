String.prototype.ucfirst = function () {
    let input = this;
    if (input.length === 0) {
        return '';
    } else {
        return input[0].toUpperCase() + input.substring(1);
    }
};



String.prototype.capitalize = function (join = ' ') {
    let input = this;
    if (input.length === 0) {
        return '';
    } else {
        let datas = input.split(' ');
        for (let i = 0; i < datas.length; i++) {
            datas[i] = ucfirst(datas[i]);
        }
        return datas.join(join);
    }
};

String.prototype.camelCase = function () {
    let input = this;
    return input.capitalize('');
};

String.prototype.snake_case = function () {
    let str = this;
    str = str.replace(' ', '_').toLowerCase();
    return str;
};

String.prototype.leet = function () {
    let str = this;

    function replaceChr(chr) {
        let encryptDatas = {
            'a': '4',
            'e': '3',
            'i': '1',
            'o': '0',
            'u': '( )',
            'y': '7'
        };
        return encryptDatas[chr.toLowerCase()] || chr;
    }

    return str.replace(/[aeiouyAEIOUY]/g, replaceChr);
};

String.prototype.verlan = function () {
    let str = this;
    let array = Array.from(str);
    array = array.reverse().join('');
    return array;
};

String.prototype.yoda = function () {
    let str = this;

    str = str.split(' ');
    str = str.reverse().join(' ');
    return str;
};

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
console.log('test'.ucfirst());