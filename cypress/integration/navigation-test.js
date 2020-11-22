describe("Test Navigation List", () => {
    it("opens page", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/index.html")
    })
    it("Tests Navigation opening", () => {
        cy.get(".navigation-list").should("be.hidden")
            // click hamburger button should open nav
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
            // click x button should close nav
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Test navigation list contents", () => {
        cy.get(".navigation-link").then(item => {
            expect(item[0]).to.contain.text("Home");
            expect(item[0]).to.have.attr("href", "#home")
            expect(item[1]).to.contain.text("About")
            expect(item[1]).to.have.attr("href", "#about")
            expect(item[2]).to.contain.text("Our Destinations")
            expect(item[2]).to.have.attr("href", "#destinations")
            expect(item[3]).to.contain.text("Booking Enquiry")
            expect(item[3]).to.have.attr("href", "booking.html")
            expect(item[4]).to.contain.text("Reviews")
            expect(item[4]).to.have.attr("href", "#reviews")
            expect(item[5]).to.contain.text("Package Specials")
            expect(item[5]).to.have.attr("href", "#special-packages")
            expect(item[6]).to.contain.text("Contact")
            expect(item[6]).to.have.attr("href", "#contact")
        })
    })
    it("Tests Navigation Home link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=home-link-lp]").click().url().should("include", "/index.html#home")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation About link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=about-link-lp]").click().url().should("include", "/index.html#about")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation Destination link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=destinations-link-lp]").click().url().should("include", "/index.html#destinations")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation reviews link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=review-link-lp]").click().url().should("include", "/index.html#reviews")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation Packages link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=package-link-lp]").click().url().should("include", "/index.html#special-packages")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation contact link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=contact-link-lp]").click().url().should("include", "/index.html#contact")
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Tests Navigation Booking enquiry link", () => {
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get("[data-cy=booking-link-lp]").click().url().should("include", "/booking.html")
        cy.get(".navigation-list").should("be.hidden")
    })

})