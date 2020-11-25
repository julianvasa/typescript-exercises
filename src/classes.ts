export class Greeter {
    private greeting: string
    constructor(greeting: string) {
        this.greeting = greeting
    }
    protected greet(): string { return "Hello " + this.greeting }
}

export class SpecificGreeter extends Greeter {
    constructor(greeting: string) {
        super(greeting)
    }
    greet(): string { return "Hello " + super.greet() }
}