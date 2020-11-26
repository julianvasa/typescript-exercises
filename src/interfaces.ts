import {ShapeEnum, Colors} from './enums'

export interface Person {
    name: string,
    surname: string,
    age: number
}

type Optionalize<T> = {
    [K in keyof T]?: T[K]
}

export type PartialPerson = Optionalize<Person>

export type NumberOrStringAsNumber = number | string

export interface Fruit {
    name: string,
    color: Color
}

export interface Color {
    color: Colors
}

export interface Shape{
    shape: ShapeEnum
}