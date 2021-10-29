
describe("Cypress Mock API Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    it("Liste Leer", () => {
        cy.get("#UserList")
            .should("not.be.visible");     
    });

    it("Mock API call on Button Click", () => {
        cy.intercept(
            {
                method: "get", //Route all get Requests
                url: "https://randomuser.me/api/*" //that have a URL that matches
            }, //return the following
            {results:[
                {
                    name:{
                        title:"Mr",
                        first:"Max",
                        last:"Mustermann"
                    },
                    login:{
                        uuid:"1337"
                    }
                },
                {
                    name:{
                        title:"Mrs",
                        first:"Lisa",
                        last:"Musterfrau"
                        },
                    login:{
                        uuid:"4711"
                    }
                }
            ]}
        ).as("getUsers"); //and assign an alias

        cy.get("#UserButton")
            .click()
            .get("#UserList").children()
            .should("have.length", 2);

        cy.get("#UserList").children().first().should("have.text","Mr Max Mustermann");
        cy.get("#UserList").children().eq(1).should("have.text","Mrs Lisa Musterfrau");
    });
  });