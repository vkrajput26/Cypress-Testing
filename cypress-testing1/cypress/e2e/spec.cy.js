/// <reference types="Cypress"/>


describe('Checking the counter application', () => {
  it('should be able to visit the application url', () => {
    cy.visit('http://localhost:3000/')
  })

  it("should have all the component",()=>{
    cy.visit('http://localhost:3000/')
    //components is present or not
    cy.get("h3").should("exist");  //same as expect(h3).toBeInTheDocument()  

    cy.get(".increment_count").should("exist"); 
    cy.get(".decrement_count").should("exist"); 
  })

  it("Should be able to increment counter",()=>{
    cy.visit('http://localhost:3000/');
    cy.get('h3').should("have.text","the count 0");

    cy.get(".increment_count").click()
    cy.get('h3').should("have.text","the count 1");
  })

  it("shold click multiple time",()=>{
    cy.visit('http://localhost:3000/');
    cy.get('h3').should("have.text","the count 0");

    cy.get(".increment_count").click()
    cy.get(".increment_count").click()
    cy.get(".increment_count").click("")
    cy.get('h3').should("have.text","the count 3");
  })

  it("the input form should be auto-focused",()=>{
    cy.visit('http://localhost:3000/');
    cy.get(".input_focus").click()
    cy.get("input").should("have.focus")
  })

  it("the value should have be the same as the typed value",()=>{
    cy.visit('http://localhost:3000/');
    cy.get(".input_focus").should("have.value","hello")
  })




  //interceptor
  it("should intecept a GET request",()=>{
    cy.intercept("GET"," ")
  })
})