function type_check_v1(elem, type) {
    return typeof elem === type;
}

function type_check_v2(elem, conf) {
    let ok = 1;
    if (conf.enum) {
        let checkEnum = 0;
        conf.enum.forEach(function (value) {
            if (value === elem) {
                checkEnum = 1;
                return;
            }
        });
        ok = checkEnum;
    }
    if (conf.type) {
        if (typeof elem !== conf.type) {
            ok = 0;
        }
    }
    if (conf.value) {
        if (elem !== conf.value) {
            ok = 0;
        }
    }
    return ok === 1;
}

function type_check_v3(elem, properties) {

}


console.log(type_check_v2(3, {enum: ["foo", "bar",3]}));
console.log(type_check_v2(3, {type: 'number'}));
console.log(type_check_v2(3, {type: 'string'}));
console.log(type_check_v2(3, {type: 'number', value: 3}));
console.log(type_check_v2(3, {type: 'number', value: 4}));
console.log(type_check_v2(3, {type: 'string', value: 3}));
console.log(type_check_v2(3, {value: 3}));
console.log(type_check_v2(3, {value: 4}));
