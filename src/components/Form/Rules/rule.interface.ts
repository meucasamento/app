export default interface Rule {
    message: string
    validate(value?: any): Promise<void>
}