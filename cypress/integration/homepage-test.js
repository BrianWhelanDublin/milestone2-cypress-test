describe("Test Homepage", () => {
    it("Visits milestone project", () => {
        cy.visit("https://brianwhelandublin.github.io/milestone-project-2/index.html")
    })
    it("Tests title", () => {
        cy.get(".main-title").should("contain", "Great Escapes")
        cy.get(".hero-text")
            // test find out more button
        cy.get(".hero-link")
            .should("contain", "Find Out More")
            .and("have.attr", "href",
                "#about")
    })
    it("Tests about section", () => {
        cy.get(".hero-link").click().url().should("include", "#about")
        cy.get(".about-col").find("img").should("have.attr", "src").should("contain", "assets/images/about.jpg")
        cy.get(".about-heading").should("contain", "Explore The World")
    })
    it("Tests Our destination Section", () => {
        cy.get("#destinations").scrollIntoView()
        cy.get(".destination-heading").should("contain", "Our Destinations")
        cy.get("#cities-slider").scrollIntoView()
        cy.get("#cities-slider").within(() => {
            cy.get(".destination-card").each(($el) => {
                expect($el).to.exist
            })
        })

        cy.get("#beach-slider").scrollIntoView()
        cy.get("#beach-slider").within(() => {
            cy.get(".destination-card").each(($el) => {
                expect($el).to.exist
            })
        })
    })
    it("Tests Reviews section", () => {
        cy.get("#reviews").scrollIntoView()
        cy.get(".reviews-heading").should("contain", "Our Reviews")
        cy.get(".reviewer-1").should("have.class", "active")
        cy.get(".review-2").should("be.hidden")
        cy.get(".review-3").should("be.hidden")
        cy.get(".reviewer-2").click().then(() => {
            cy.get(".reviewer-2").should("have.class", "active")
            cy.get(".review-1").should("be.hidden")
            cy.get(".review-3").should("be.hidden")
        })
        cy.get(".reviewer-3").click().then(() => {
            cy.get(".reviewer-3").should("have.class", "active")
            cy.get(".review-1").should("be.hidden")
            cy.get(".review-2").should("be.hidden")
        })
        cy.get(".reviewer-1").click().then(() => {
            cy.get(".reviewer-1").should("have.class", "active")
            cy.get(".review-2").should("be.hidden")
            cy.get(".review-3").should("be.hidden")
        })
    })
    it("Tests Offers Section", () => {
        cy.get("#special-packages").scrollIntoView()
        cy.get("#special-packages").should("contain", "Our Package Offers")

    })
    it("Tests Newsletter Section", () => {
        cy.get("#signup").scrollIntoView()
        cy.get("#signup-email").should("have.attr", "placeholder", "Email")
        cy.get("#newsletterModal").should("be.hidden")
        cy.get("#signup-email").type("email@email.com")
            // cy.get("#signup-submit").click()
            //cy.wait(500).then(() => {
            //     cy.get("#newsletterModal").should("be.visible")
            //})
    })
    it("Test Contact Form Section", () => {
        cy.get("#contact").scrollIntoView()
        cy.get("#contactformModal").should("be.hidden")
        cy.get("#contact-name").should("have.attr", "placeholder", "Name").type("name")
        cy.get("#contact-email").should("have.attr", "placeholder", "Email").type("email@email.com")
        cy.get("#contact-message").should("have.attr", "placeholder", "Message").type("message")
            // cy.get(".contact-btn").click()
            //cy.wait(500).then(() => {
            //     cy.get("#contactFormModal").should("be.visible")
            //})
    })
    it("Tests footer", () => {
        cy.get(".social-media-links").should("have.attr", "target", "_blank")
    })
})