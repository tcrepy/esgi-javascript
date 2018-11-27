function type_check_v1(elem, type) {
    if (type === 'null') {
        return elem === null;
    }
    if (type === 'array') {
        return Array.isArray(elem);
    }
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
        if (!type_check_v1(elem, conf.type)) {
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

console.log(typeof null);
console.log(type_check_v1(null, 'null'));