let ucfirst = function (str) {
    if (str.length === 0) {
        return '';
    } else {
        return str[0].toUpperCase() + str.substring(1);
    }
};

let capitalize = function (str, join = ' ') {
    if (str.length === 0) {
        return '';
    } else {
        let datas = str.split(' ');
        for (let i = 0; i < datas.length; i++) {
            datas[i] = ucfirst(datas[i]);
        }
        return datas.join(join);
    }
};

let camelCase = function (str) {
    return capitalize(str, '');
};

let snake_case = function (str) {
    str = str.replace(' ', '_').toLowerCase();
    return str;
};

let leet = function (str) {
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

let propAccess = function (Obj, propToAccess) {
    propToAccess = propToAccess.split('.');
    let outDatas = Obj;
    for (let i = 0; i < propToAccess.length; i++) {
        if (outDatas[propToAccess[i]] === null) {
            return null;
        } else {
            outDatas = outDatas[propToAccess[i]];
        }
    }
    return outDatas;
};

let verlan = function (str) {
    let array = Array.from(str);
    array = array.reverse().join('');
    return array;
};

let yoda = function (str) {
   str = str.split(' ');
   str = str.reverse().join(' ');
   return str;
};

var Prairie = {
    Animal: {
        Type: {
            Name: 'Chien'
        }
    }
};

console.log(yoda('Hello world'));