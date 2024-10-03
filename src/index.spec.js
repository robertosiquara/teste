import { describe, expect, it } from "vitest";
import { soma } from ".";
import { subtração } from ".";

describe("função de soma", () => {
    it("deveria retornar a soma dos dois números", () =>{
        const resultado = soma(2,2)

        expect(resultado).toBe(4)
    })
})

describe("função de subtração", () => {
    it("deveria retornar a subtração dos dois números", () =>{
        const resultado = subtração(2,2)

        expect(resultado).toBe(0)
    })
})
