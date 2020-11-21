describe("Test Homepage", function() {
    it("Visits milestone project", function() {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/index.html")
    })
    it("Tests Navigation", function() {
        cy.get(".navigation-list").should("be.hidden")
            // click hamburger button should open nav
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
            // click x button should close nav
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.hidden")
    })

})