const inputValidation = (text) => {
    if(text.length === 0) {
       return 'required.';
    } else if(text.length > 100) {
        return ' needs to be less than 100 characters.';
    } else {
        return 'valid';
    }
}

const textAreaValidation = (text) => {
    if(text.length === 0) {
        return 'required.';
     } else if(text.length > 2000) {
         return ' needs to be less than 2000 characters.';
     } else {
         return 'valid';
     }
}

const emailValidation = (text) => {
    const isEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(text)

    return isEmail ? 'valid' : 'must contain a valid email.'
}


export {inputValidation, textAreaValidation, emailValidation};