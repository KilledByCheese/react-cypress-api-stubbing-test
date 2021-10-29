
describe("Cypress Mock API Tests", () => {
    beforeEach(() => {                      //Before each Test
        cy.visit("http://localhost:3000")   //Load the application
    });

    it("User List not visible at the beginning", () => {
        cy.get("#UserList")             //get the User List by ID
            .should("not.be.visible");  //Should not be visible because it's empty
    });

    it("Mock API call on Button Click", () => {
        cy.intercept(                               //Stub/Mock/Intercept API calls
            {
                method: "get",                      //Route all get Requests
                url: "https://randomuser.me/api/*"  //that have a URL that matches
            },                                      //return the following data
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
        ).as("getUsers");                   //and assign an alias

        cy.get("#UserButton")               //Get the Button by ID
            .click()                        //Click it
            .get("#UserList").children()    //Get the User List by ID
            .should("have.length", 2);      //Check the Length

        cy.get("#UserList")                             //Get the User List by ID
            .children()                                 //get the child elements
            .first()                                    //get the first child element
            .should("have.text","Mr Max Mustermann");   //Check the Content

        cy.get("#UserList")                             //Get the User List by ID
            .children()                                 //get the child elements
            .eq(1)                                      //get the second child Element
            .should("have.text","Mrs Lisa Musterfrau"); //check the Content
    });
  });