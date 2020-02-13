import Rule from './rule.interface'

export class RequiredRule implements Rule {
    
    message: string

    constructor(message: string = "Campo obrigatório") {
        this.message = message
    }

    validate = (value?: any): Promise<void> => {
        if (value) { 
            return Promise.resolve()
        }

        return Promise.reject(new Error(this.message))
    }

}

export class EmailRule implements Rule {
    
    message: string

    constructor(message: string = "Deve conter um email válido") {
        this.message = message
    }

    validate = (value?: any): Promise<void> => {
        if (!value) { 
            return Promise.resolve()
        }
        
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
        const isValid = regex.test(String(value).toLowerCase())

        if (isValid) {
            return Promise.resolve()
        } else {
            return Promise.reject(new Error(this.message))
        }
    }

}