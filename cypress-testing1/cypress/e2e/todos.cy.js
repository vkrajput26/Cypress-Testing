describe("Test the todo application",()=>{
    it("should check the basic structure",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".new-todo").should("exist");
        cy.get(".todo-count").should("exist");
        cy.get(".filters").should("exist");
    })

    it("should be able to add todo",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("learn{enter}");
        cy.get(".todo-list").children().should("have.length",3)
    })

    it("should beable to increase the task length after adding a todo",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-count strong").should("have.text",2);
        cy.get(".new-todo").type("learn{enter}")
        cy.get(".todo-count strong").should("have.text",3);
    })
})