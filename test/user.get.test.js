var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/users", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all users", function(done) {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      {
        userid: "jdk123",
        name: "John Kennedy",
        email: "j@k.com",
        password: "you",
        role: "admin"
      },
      {
        userid: "duke",
        name: "John Wayne",
        email: "duke@westerns.com",
        password: "you",
        role: "admin"
      },
      {
        userid: "tpetty",
        name: "Tom Petty",
        email: "charlietwilbury@twills.com",
        password: "you",
        role: "admin"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/users").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(3);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            userid: "duke",
            name: "John Wayne",
            email: "duke@westerns.com",
            password: "you",
            role: "admin"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            userid: "jdk123",
            name: "John Kennedy",
            email: "j@k.com",
            password: "you",
            role: "admin"
          });

        expect(responseBody[2])
          .to.be.an("object")
          .that.includes({
            userid: "tpetty",
            name: "Tom Petty",
            email: "charlietwilbury@twills.com",
            password: "you",
            role: "admin"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
