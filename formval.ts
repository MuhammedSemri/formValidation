

export namespace FormValidation{
    
    // returns true if email is valid
    // false if not
    export function isEmailValid(email: string):boolean {
        let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return reg.test(email);
    }

    // returns true if string contains alphanumric characters only(alphabet,integers)
    export function isAlphanumeric(str: string):boolean {
        let reg = new RegExp(/^[a-z0-9]+$/i);
        return reg.test(str);
    }

}