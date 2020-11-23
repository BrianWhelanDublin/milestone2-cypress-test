/*
describe("Test booking enquiry page", () => {
    it("Visits booking page", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html")
    })
    it("Checks navigation", () => {
        cy.get(".navigation-list").should("be.hidden")
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.visible")
        cy.get(".navigation-link").then(item => {
            expect(item[0]).to.contain.text("Home");
            expect(item[0]).to.have.attr("href", "index.html#home")
            expect(item[1]).to.contain.text("About")
            expect(item[1]).to.have.attr("href", "index.html#about")
            expect(item[2]).to.contain.text("All Destinations")
            expect(item[2]).to.have.attr("href", "index.html#destinations")
            expect(item[3]).to.contain.text("Package Specials")
            expect(item[3]).to.have.attr("href", "index.html#special-packages")
            expect(item[4]).to.contain.text("Reviews")
            expect(item[4]).to.have.attr("href", "index.html#reviews")
            expect(item[5]).to.contain.text("Contact")
            expect(item[5]).to.have.attr("href", "index.html#contact")
        })
        cy.get(".hamburger").click()
        cy.get(".navigation-list").should("be.hidden")
    })
    it("Completes booking form", () => {
        cy.get("#booking-modal").should("be.hidden")
        cy.get("#destination-bf").type("London")
        cy.get("#package-bf").type("3 star")
        cy.get("#firstname-bf").type("John")
        cy.get("#surname-bf").type("Doe")
        cy.get("#emailaddress-bf").type("johndoe@email.com")
        cy.get("#phone-bf").type("08777777")
        cy.get("#inputaddress1-bf").type("1 main street")
        cy.get("#inputaddress2-bf").type("big town")
        cy.get("#inputcity-bf").type("city")
        cy.get("#inputprovince-bf").select("Ulster")
        cy.get("#inputeircode-bf").type("266h888")
        cy.get("#adults-bf").type("2")
        cy.get("#arrival-bf").type("2020-12-22")
        cy.get("#depart-bf").type("2020-12-26")
        cy.get(".booking-form-btn").click()
        cy.wait(500).then(() => {
            cy.get("#booking-modal").should("be.visible")
        })
    })
})
*/
// Dubai
describe("Test by destination and package", () => {
        it("Test for Dubai", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c0")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Dubai Page")
                expect(item[1]).to.have.attr("href", "destination.html?c0")
                expect(item[2]).to.contain.text("Dubai Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c0#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Dubai")
        })
        it("Tests for dubai packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c0+p1")
            cy.get("#destination-bf").should("have.value", "Dubai")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c0+p2")
            cy.get("#destination-bf").should("have.value", "Dubai")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c0+p3")
            cy.get("#destination-bf").should("have.value", "Dubai")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Kyoto
describe("Test by destination and package", () => {
        it("Test for Kyoto", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c1")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Kyoto Page")
                expect(item[1]).to.have.attr("href", "destination.html?c1")
                expect(item[2]).to.contain.text("Kyoto Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c1#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Kyoto")
        })
        it("Tests for Kyoto packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c1+p1")
            cy.get("#destination-bf").should("have.value", "Kyoto")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c1+p2")
            cy.get("#destination-bf").should("have.value", "Kyoto")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c1+p3")
            cy.get("#destination-bf").should("have.value", "Kyoto")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // London
describe("Test by destination and package", () => {
        it("Test for London", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c2")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("London Page")
                expect(item[1]).to.have.attr("href", "destination.html?c2")
                expect(item[2]).to.contain.text("London Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c2#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "London")
        })
        it("Tests for London packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c2+p1")
            cy.get("#destination-bf").should("have.value", "London")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c2+p2")
            cy.get("#destination-bf").should("have.value", "London")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c2+p3")
            cy.get("#destination-bf").should("have.value", "London")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Madrid
describe("Test by destination and package", () => {
        it("Test for Madrid", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c3")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Madrid Page")
                expect(item[1]).to.have.attr("href", "destination.html?c3")
                expect(item[2]).to.contain.text("Madrid Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c3#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Madrid")
        })
        it("Tests for Madrid packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c3+p1")
            cy.get("#destination-bf").should("have.value", "Madrid")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c3+p2")
            cy.get("#destination-bf").should("have.value", "Madrid")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c3+p3")
            cy.get("#destination-bf").should("have.value", "Madrid")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // New York
describe("Test by destination and package", () => {
        it("Test for New York", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c4")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("New York Page")
                expect(item[1]).to.have.attr("href", "destination.html?c4")
                expect(item[2]).to.contain.text("New York Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c4#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "New York")
        })
        it("Tests for New York packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c4+p1")
            cy.get("#destination-bf").should("have.value", "New York")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c4+p2")
            cy.get("#destination-bf").should("have.value", "New York")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c4+sp")
            cy.get("#destination-bf").should("have.value", "New York")
            cy.get("#package-bf").should("have.value", "4 Star Special")
        })
    })
    // Paris
describe("Test by destination and package", () => {
        it("Test for Paris", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c5")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Paris Page")
                expect(item[1]).to.have.attr("href", "destination.html?c5")
                expect(item[2]).to.contain.text("Paris Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c5#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Paris")
        })
        it("Tests for Paris packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c5+p1")
            cy.get("#destination-bf").should("have.value", "Paris")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c5+p2")
            cy.get("#destination-bf").should("have.value", "Paris")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c5+sp")
            cy.get("#destination-bf").should("have.value", "Paris")
            cy.get("#package-bf").should("have.value", "4 Star Special")
        })
    })
    // Prague
describe("Test by destination and package", () => {
        it("Test for Prague", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c6")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Prague Page")
                expect(item[1]).to.have.attr("href", "destination.html?c6")
                expect(item[2]).to.contain.text("Prague Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c6#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Prague")
        })
        it("Tests for Prague packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c6+p1")
            cy.get("#destination-bf").should("have.value", "Prague")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c6+p2")
            cy.get("#destination-bf").should("have.value", "Prague")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c6+p3")
            cy.get("#destination-bf").should("have.value", "Prague")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    //Rome
describe("Test by destination and package", () => {
        it("Test for Rome", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c7")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Rome Page")
                expect(item[1]).to.have.attr("href", "destination.html?c7")
                expect(item[2]).to.contain.text("Rome Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c7#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Rome")
        })
        it("Tests for Rome packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c7+p1")
            cy.get("#destination-bf").should("have.value", "Rome")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c7+p2")
            cy.get("#destination-bf").should("have.value", "Rome")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c7+p3")
            cy.get("#destination-bf").should("have.value", "Rome")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Singapore
describe("Test by destination and package", () => {
        it("Test for Singapore", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c8")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Singapore Page")
                expect(item[1]).to.have.attr("href", "destination.html?c8")
                expect(item[2]).to.contain.text("Singapore Packages")
                expect(item[2]).to.have.attr("href", "destination.html?c8#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Singapore")
        })
        it("Tests for Singapore packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c8+p1")
            cy.get("#destination-bf").should("have.value", "Singapore")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c8+p2")
            cy.get("#destination-bf").should("have.value", "Singapore")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c8+p3")
            cy.get("#destination-bf").should("have.value", "Singapore")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Tokyo
describe("Test by destination and package", () => {
    it("Test for Tokyo", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c9")
        cy.get(".navigation-link").then(item => {
            expect(item[1]).to.contain.text("Tokyo Page")
            expect(item[1]).to.have.attr("href", "destination.html?c9")
            expect(item[2]).to.contain.text("Tokyo Packages")
            expect(item[2]).to.have.attr("href", "destination.html?c9#destination-packages")
        })
        cy.get("#destination-bf").should("have.value", "Tokyo")
    })
    it("Tests for Tokyo packages", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c9+p1")
        cy.get("#destination-bf").should("have.value", "Tokyo")
        cy.get("#package-bf").should("have.value", "3 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c9+p2")
        cy.get("#destination-bf").should("have.value", "Tokyo")
        cy.get("#package-bf").should("have.value", "4 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?c9+p3")
        cy.get("#destination-bf").should("have.value", "Tokyo")
        cy.get("#package-bf").should("have.value", "5 Star")
    })
})