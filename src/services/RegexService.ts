const checkPassword = (password: string): boolean => {

    const pattern: RegExp = /^([!@#$%^&*()a-zA-Z0-9]*\d*[A-Z]+\d*[!@#$%^&*()a-zA-Z0-9]*\d*)+$/;

    return pattern.test(password)
}

const checkEmail = (email: string): boolean => {

    const pattern: RegExp = /^([a-zA-Z0-9_]+)(\.[a-zA-Z0-9_]+)*(@)([a-zA-Z0-9]+)(\-{1})?([a-zA-Z0-9])*\.[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;

    return pattern.test(email);
}


export { checkPassword, checkEmail }