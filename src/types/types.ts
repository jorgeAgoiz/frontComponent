export interface User {
    name: string,
    rate: number
}

export interface Data {
    reviews?: Array<User>,
    recall?: boolean
}