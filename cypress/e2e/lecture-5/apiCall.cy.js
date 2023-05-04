// VISIT THIS LINK FOR THE API DETAILS --> https://reqres.in/
describe('API TESTING USING CYPRESS', () => {

    it('Call the USER api for fetching the single user detals and validate its response', () => {
        let singleUserDetails = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        };

        cy.request({

            method: 'GET', // Defined API Method
            url: 'https://reqres.in/api/users/2',  // Defined API URL
    
        }).then((response) => {
    
            // Performed assertion on the status code of response
            expect(response.status).to.eq(200);
    
            // Performed assertion on the response data
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id');
            expect(response.body.data.id).to.eq(singleUserDetails.data.id);
            expect(response.body.data).to.have.property('email');
            expect(response.body.data.email).to.eq(singleUserDetails.data.email);
            expect(response.body.data).to.have.property('first_name');
            expect(response.body.data.first_name).to.eq(singleUserDetails.data.first_name);
            expect(response.body.data).to.have.property('last_name');
            expect(response.body.data.last_name).to.eq(singleUserDetails.data.last_name);
            expect(response.body.data).to.have.property('avatar');
            expect(response.body.data.avatar).to.eq(singleUserDetails.data.avatar);
    
            expect(response.body).to.have.property('support');
            expect(response.body.support).to.have.property('url');
            expect(response.body.support.url).to.eq(singleUserDetails.support.url);
            expect(response.body.support).to.have.property('text');
            expect(response.body.support.text).to.eq(singleUserDetails.support.text);
    
        })
    })

    it('Call the USER api for creating the new user and validate its response', () => {
        let userData = {
            "name": "morpheus",
            "job": "leader"
        };

        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: userData
    
        }).then((response) => {
    
            expect(response.status).to.eq(201);
    
            expect(response.body).to.have.property('name');
            expect(response.body.name).to.eq(userData.name);
    
            expect(response.body).to.have.property('job');
            expect(response.body.job).to.eq(userData.job);
    
            expect(response.body).to.have.property('id');
    
            expect(response.body).to.have.property('createdAt');
    
        })
    });
  })