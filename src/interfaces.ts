export interface Person {
    name: string,
    surname: string,
    age: number
}

type Optionalize<T> = {
    [K in keyof T]?: T[K]
}

export type PartialPerson = Optionalize<Person>