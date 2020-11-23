describe("Test footer on homepage", () => {
    it("Opens page", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/index.html")
    })
    it("scrolls to footer", () => {
        cy.get("footer").scrollIntoView()
    })
    it("tests links have correct href and target", () => {
        cy.get("[data-cy=insta-lp]").should("have.attr", "href", "https://www.instagram.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=face-lp]").should("have.attr", "href", "https://www.facebook.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=tweet-lp]").should("have.attr", "href", "https://www.twitter.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=trip-lp]").should("have.attr", "href", "https://www.tripadvisor.ie/").should("have.attr", "target", "_blank")
    })
    it("opens links", () => {
        cy.get("[data-cy=insta-lp]").click()
        cy.get("[data-cy=face-lp]").click()
        cy.get("[data-cy=tweet-lp]").click()
        cy.get("[data-cy=trip-lp]").click()
    })
})
describe("Test footer on destination page", () => {
    it("Opens page", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/destination.html")
    })
    it("scrolls to footer", () => {
        cy.get("footer").scrollIntoView()
    })
    it("tests links have correct href and target", () => {
        cy.get("[data-cy=insta-lp]").should("have.attr", "href", "https://www.instagram.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=face-lp]").should("have.attr", "href", "https://www.facebook.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=tweet-lp]").should("have.attr", "href", "https://www.twitter.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=trip-lp]").should("have.attr", "href", "https://www.tripadvisor.ie/").should("have.attr", "target", "_blank")
    })
    it("opens links", () => {
        cy.get("[data-cy=insta-lp]").click()
        cy.get("[data-cy=face-lp]").click()
        cy.get("[data-cy=tweet-lp]").click()
        cy.get("[data-cy=trip-lp]").click()
    })
})
describe("Test footer on destination page", () => {
    it("Opens page", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html")
    })
    it("scrolls to footer", () => {
        cy.get("footer").scrollIntoView()
    })
    it("tests links have correct href and target", () => {
        cy.get("[data-cy=insta-lp]").should("have.attr", "href", "https://www.instagram.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=face-lp]").should("have.attr", "href", "https://www.facebook.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=tweet-lp]").should("have.attr", "href", "https://www.twitter.com/").should("have.attr", "target", "_blank")
        cy.get("[data-cy=trip-lp]").should("have.attr", "href", "https://www.tripadvisor.ie/").should("have.attr", "target", "_blank")
    })
    it("opens links", () => {
        cy.get("[data-cy=insta-lp]").click()
        cy.get("[data-cy=face-lp]").click()
        cy.get("[data-cy=tweet-lp]").click()
        cy.get("[data-cy=trip-lp]").click()
    })
})