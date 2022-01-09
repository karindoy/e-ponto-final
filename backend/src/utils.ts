

export function isBoolean(el: any): Boolean {

    if (el == true || el == false) {
        return true
    }
    return false
}

export function isInteger(el: any): Boolean {

    console.log(el)
    if (!/^-?[0-9]+$/.test(el)) {
        return false
    }

    console.log(isFinite(el))
    console.log(!isNaN(parseFloat(el)))
    return true
}

