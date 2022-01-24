import {TestClassBase } from "./test-class-base";

export class TestClass extends TestClassBase {
    constructor(thisName: string){
        super(thisName);
    }

    public getName() {
        return this.name;
    }
}