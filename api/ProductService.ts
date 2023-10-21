export const ProductService = {
    getProductsWithOrdersData() {
       return [
        {
          "users": [
            {
              "userId": "652a3f03417f2b712f52c1f0",
              "basicDetails": {
                "firstName": "ADITYA",
                "lastName": "DUBEY",
                "email": "A@GMAIL.COM",
                "gender": "Male"
              },
              "workExperience": [
                {
                  "jobTitle": "Software Engineer",
                  "institute": "AIIMS",
                  "employmentType": "Part-time",
                  "location": "Pune",
                  "isCurrentRole": true,
                  "startDate": "2023-03-06T14:43:09.017Z",
                  "endDate": "2023-10-17T14:43:09.017Z",
                  "description": "",
                  "attachmentUrl": "",
                  "_id": "652ea7a429018c5825d66d9d"
                }
              ],
              userAddress: {
                postalCode: '452012',
              },
              "educationHistory": [
                {
                  "attachmentUrl": "",
                  "college": "IIMS",
                  "degree": "BE",
                  "description": "tesf",
                  "endDate": "2023",
                  "fieldofStudy": "EC",
                  "location": "PUNE",
                  "startDate": "2019",
                  "_id": "652ea73129018c5825d66d57"
                }
              ]
            }
          ],
          "jobId": "652ea8c629018c5825d66da1",
          "description": "I want to hire a Nurse for my child",
          "clientName": "Mohan Dubey",
          "clientAddress": {
            "addressLine": 'G-332, Silicon City',
            "state": "UP",
            "city": "Agra",
            "pincode": "452018"
          },
          "timeRequired": "Afternoon",
          "jobDates": "2023-10-21",
          "jobStatus": "Posted"
        }
      ]
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

