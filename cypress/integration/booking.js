// bookin page no destination selected
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
    // Antiqua
describe("Test by destination and package", () => {
        it("Test for Antigua", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b0")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Antigua Page")
                expect(item[1]).to.have.attr("href", "destination.html?b0")
                expect(item[2]).to.contain.text("Antigua Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b0#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Antigua")
        })
        it("Tests for Antigua packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b0+p1")
            cy.get("#destination-bf").should("have.value", "Antigua")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b0+p2")
            cy.get("#destination-bf").should("have.value", "Antigua")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b0+p3")
            cy.get("#destination-bf").should("have.value", "Antigua")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Bali
describe("Test by destination and package", () => {
        it("Test for Bali", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b1")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Bali Page")
                expect(item[1]).to.have.attr("href", "destination.html?b1")
                expect(item[2]).to.contain.text("Bali Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b1#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Bali")
        })
        it("Tests for Bali packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b1+p1")
            cy.get("#destination-bf").should("have.value", "Bali")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b1+p2")
            cy.get("#destination-bf").should("have.value", "Bali")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b1+p3")
            cy.get("#destination-bf").should("have.value", "Bali")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Capri
describe("Test by destination and package", () => {
        it("Test for Capri", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b2")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Capri Page")
                expect(item[1]).to.have.attr("href", "destination.html?b2")
                expect(item[2]).to.contain.text("Capri Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b2#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Capri")
        })
        it("Tests for Capri packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b2+p1")
            cy.get("#destination-bf").should("have.value", "Capri")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b2+p2")
            cy.get("#destination-bf").should("have.value", "Capri")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b2+p3")
            cy.get("#destination-bf").should("have.value", "Capri")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Fiji
describe("Test by destination and package", () => {
        it("Test for Fiji", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b3")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Fiji Page")
                expect(item[1]).to.have.attr("href", "destination.html?b3")
                expect(item[2]).to.contain.text("Fiji Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b3#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Fiji")
        })
        it("Tests for Fiji packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b3+p1")
            cy.get("#destination-bf").should("have.value", "Fiji")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b3+p2")
            cy.get("#destination-bf").should("have.value", "Fiji")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b3+p3")
            cy.get("#destination-bf").should("have.value", "Fiji")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Koh Phi Phi
describe("Test by destination and package", () => {
        it("Test for Koh Phi Phi", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b4")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Koh Phi Phi Page")
                expect(item[1]).to.have.attr("href", "destination.html?b4")
                expect(item[2]).to.contain.text("Koh Phi Phi Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b4#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Koh Phi Phi")
        })
        it("Tests for Koh Phi Phi packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b4+p1")
            cy.get("#destination-bf").should("have.value", "Koh Phi Phi")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b4+p2")
            cy.get("#destination-bf").should("have.value", "Koh Phi Phi")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b4+p3")
            cy.get("#destination-bf").should("have.value", "Koh Phi Phi")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Maldives
describe("Test by destination and package", () => {
        it("Test for Maldives", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b5")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Maldives Page")
                expect(item[1]).to.have.attr("href", "destination.html?b5")
                expect(item[2]).to.contain.text("Maldives Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b5#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Maldives")
        })
        it("Tests for Maldives packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b5+p1")
            cy.get("#destination-bf").should("have.value", "Maldives")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b5+p2")
            cy.get("#destination-bf").should("have.value", "Maldives")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b5+p3")
            cy.get("#destination-bf").should("have.value", "Maldives")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Seychelles
describe("Test by destination and package", () => {
        it("Test for Seychelles", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b6")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Seychelles Page")
                expect(item[1]).to.have.attr("href", "destination.html?b6")
                expect(item[2]).to.contain.text("Seychelles Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b6#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Seychelles")
        })
        it("Tests for Seychelles packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b6+p1")
            cy.get("#destination-bf").should("have.value", "Seychelles")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b6+p2")
            cy.get("#destination-bf").should("have.value", "Seychelles")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b6+p3")
            cy.get("#destination-bf").should("have.value", "Seychelles")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Philippines
describe("Test by destination and package", () => {
    it("Test for Philippines", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b7")
        cy.get(".navigation-link").then(item => {
            expect(item[1]).to.contain.text("Philippines Page")
            expect(item[1]).to.have.attr("href", "destination.html?b7")
            expect(item[2]).to.contain.text("Philippines Packages")
            expect(item[2]).to.have.attr("href", "destination.html?b7#destination-packages")
        })
        cy.get("#destination-bf").should("have.value", "Philippines")
    })
    it("Tests for Philippines packages", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b7+p1")
        cy.get("#destination-bf").should("have.value", "Philippines")
        cy.get("#package-bf").should("have.value", "3 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b7+p2")
        cy.get("#destination-bf").should("have.value", "Philippines")
        cy.get("#package-bf").should("have.value", "4 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b7+p3")
        cy.get("#destination-bf").should("have.value", "Philippines")
        cy.get("#package-bf").should("have.value", "5 Star")
    })
})

// Tulum
describe("Test by destination and package", () => {
        it("Test for Tulum", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b8")
            cy.get(".navigation-link").then(item => {
                expect(item[1]).to.contain.text("Tulum Page")
                expect(item[1]).to.have.attr("href", "destination.html?b8")
                expect(item[2]).to.contain.text("Tulum Packages")
                expect(item[2]).to.have.attr("href", "destination.html?b8#destination-packages")
            })
            cy.get("#destination-bf").should("have.value", "Tulum")
        })
        it("Tests for Tulum packages", () => {
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b8+p1")
            cy.get("#destination-bf").should("have.value", "Tulum")
            cy.get("#package-bf").should("have.value", "3 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b8+p2")
            cy.get("#destination-bf").should("have.value", "Tulum")
            cy.get("#package-bf").should("have.value", "4 Star")
            cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b8+p3")
            cy.get("#destination-bf").should("have.value", "Tulum")
            cy.get("#package-bf").should("have.value", "5 Star")
        })
    })
    // Santorini
describe("Test by destination and package", () => {
    it("Test for Santorini", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b9")
        cy.get(".navigation-link").then(item => {
            expect(item[1]).to.contain.text("Santorini Page")
            expect(item[1]).to.have.attr("href", "destination.html?b9")
            expect(item[2]).to.contain.text("Santorini Packages")
            expect(item[2]).to.have.attr("href", "destination.html?b9#destination-packages")
        })
        cy.get("#destination-bf").should("have.value", "Santorini")
    })
    it("Tests for Santorini packages", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b9+p1")
        cy.get("#destination-bf").should("have.value", "Santorini")
        cy.get("#package-bf").should("have.value", "3 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b9+p2")
        cy.get("#destination-bf").should("have.value", "Santorini")
        cy.get("#package-bf").should("have.value", "4 Star")
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/booking.html?b9+sp")
        cy.get("#destination-bf").should("have.value", "Santorini")
        cy.get("#package-bf").should("have.value", "5 Star Special")
    })
})