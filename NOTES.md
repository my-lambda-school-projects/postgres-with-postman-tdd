# Learn TDD With Postman

Test URL: http://httpbin.org/

> Part 1: https://www.youtube.com/watch?v=Qlvbc6kIBOk

- (GET) SEND URL: http://httpbin.org/get?isGood=true&isBad=false
- (GET) SEND: Params
  - isGood: true
  - isBad: false
- (GET) SEND: Tests

  ```
  pm.test("(Status Code) 200", function () {
    pm.response.to.have.status(200);
  });

  let jsonData = pm.response.json();

  console.log(jsonData)

  pm.test("(Boolean Chai Assertion): pm.expect(true).to.be.true", function () {
      pm.expect(true).to.be.true;
  });

  pm.test("(Boolean  Chai Assertion): pm.expect(true).to.not.be.false", function () {
      pm.expect(true).to.not.be.false;
  });
  ```

- (GET) RESPONSE: Body

  ```
  {
      "args": {
          "isBad": "false",
          "isGood": "true"
      },
      "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Cache-Control": "no-cache",
          "Connection": "close",
          "Host": "httpbin.org",
          "Postman-Token": "793bd98a-4726-421f-997f-f0dd1c65ded7",
          "User-Agent": "PostmanRuntime/7.6.0"
      },
      "origin": "69.136.117.201",
      "url": "http://httpbin.org/get?isGood=true&isBad=false"
  }
  ```

- (GET) RESPONSE: Test Results

  ![GET Test Results](public/img/Postman_GET_Example_Test_Results.jpg?raw=true 'Title')

- (GET) Console Log

  ![GET Console Log](public/img/Postman_GET_Example_Console_Log.jpg?raw=true 'Title')

> Part 2: https://www.youtube.com/watch?v=AgBg0CMknfI

- (POST) SEND URL: http://httpbin.org/post
- (POST) SEND: Headers
  - Content-Type: application/json
- (POST) SEND: Body

  ```
  {
  	"name": "john",
  	"permissions": [2000,3000,4000],
  	"currentDate": {{currentDate}}
  }
  ```

- (POST) SEND: Pre-request Script

  - Note: you must click send at least once to see the `currentDate` in your globals (eye icon next to "environment" dropdown)

  ```
  let date = Date.now();
  // console.log(date)

  pm.globals.set("currentDate", date);
  ```

- (POST) SEND: Tests

  ```
  let jsonData = pm.response.json();

  pm.test("Check Global Variable Changes On Every Instantiation", function () {
      // pm.expect(jsonData.json.currentDate).to.eql(1549743931215); // Fails because value changes all the time
      // pm.expect(jsonData.json.currentDate).to.eql({{currentDate}}); // Won't work because it's not part of the javascript language.
      pm.expect(jsonData.json.currentDate).to.eql(pm.globals.get("currentDate")); // Use this instead
  });

  console.log(typeof jsonData.json.permissions); // object
  console.log(typeof "Hello World"); // string
  console.log(typeof 1); // number
  console.log(typeof true); // boolean
  console.log(typeof []); // object (notice it's not an array,  this is because of javascript)
  console.log(typeof {}); // object
  console.log(jsonData.json.permissions); // Array - and you  can open it and see the elements
  console.log(jsonData.json.permissions[0]); // 2000
  console.log(jsonData.json.permissions[2]); // 4000

  pm.test("Check Global Variable Changes On Every   Instantiation", function () {
      pm.expect(jsonData.json.permissions[2]).to.eql(4000); // bad practice, an array may change with order of elements
        // pm.expect([2000, 3000, 3001, 4000]).to.eql(4000); // Example
      pm.expect(jsonData.json.permissions).to.include(4000); // use this instead
  });
  ```

- (POST) RESPONSE: Body (raw, JSON (application/json))

  ```
  {
      "args": {},
      "data": "{\n\t\"name\": \"john\",\n\t\"permissions\": [2000,3000,4000],\n\t\"currentDate\": 1549746029866\n}",
      "files": {},
      "form": {},
      "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Cache-Control": "no-cache",
          "Connection": "close",
          "Content-Length": "84",
          "Content-Type": "application/json",
          "Host": "httpbin.org",
          "Postman-Token": "4f385e96-c900-4c36-8505-ab788101ea45",
          "User-Agent": "PostmanRuntime/7.6.0"
      },
      "json": {
          "currentDate": 1549746029866,
          "name": "john",
          "permissions": [
              2000,
              3000,
              4000
          ]
      },
      "origin": "69.136.117.201",
      "url": "http://httpbin.org/post"
  }
  ```

- (POST) RESPONSE: Test Results

  ![POST Test Results](public/img/Postman_POST_Example_Test_Results.jpg?raw=true 'Title')

- (POST) Console Log

  ![POST Console Log](public/img/Postman_POST_Example_Console_Log.jpg?raw=true 'Title')

> Part 3: https://www.youtube.com/watch?v=iPJCutFXzQE

- (PUT) SEND URL: http://httpbin.org/put
- (PUT) SEND: Headers
  - Content-Type: application/x-www-form-urlencoded
- (PUT) SEND: Body (x-www-form-urlencoded)

  - username: johndoe
  - email: john@example.com

- (PUT) SEND: Tests

  ```
  pm.test("Status code is 200", function () {
      pm.response.to.have.status(200);
  });

  pm.test("Content-Type is present", function () {
      // pm.response.to.have.header("Content-Type-Foo"); Fails
      pm.response.to.have.header("Content-Type");
      // pm.expect(pm.response.headers.get("Content-Type")).to.eql('application/jsonx'); // Fails
      pm.expect(pm.response.headers.get("Content-Type")).to.eql('application/json'); // Should match what is in the response, not what is in the send
  });
  ```

- (PUT) RESPONSE: Body

  ```
  {
      "args": {},
      "data": "",
      "files": {},
      "form": {
          "email": "john@example.com",
          "username": "johndoe"
      },
      "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Cache-Control": "no-cache",
          "Connection": "close",
          "Content-Length": "41",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "httpbin.org",
          "Postman-Token": "b3d7e6bc-9a53-4616-afb3-dc8fe79c7766",
          "User-Agent": "PostmanRuntime/7.6.0"
      },
      "json": null,
      "origin": "69.136.117.201",
      "url": "http://httpbin.org/put"
  }
  ```

- (PUT) RESPONSE: Test Results

  ![PUT Test Results](public/img/Postman_PUT_Example_Test_Results.jpg?raw=true 'Title')

- (DELETE) SEND URL: http://httpbin.org/delete
- (DELETE) SEND: Headers

  - Content-Type: application/x-www-form-urlencoded

- (DELETE) SEND: Body

  - username: johndoe
  - password: john@email.com

- (DELETE) SEND: Tests

  ```
  pm.test("Response time is less than 200ms", function () {
      pm.expect(pm.response.responseTime).to.be.below(200);
  });
  ```

- (DELETE) RESPONSE: Body

  ```
  {
      "args": {},
      "data": "",
      "files": {},
      "form": {
          "email": "john@example.com",
          "username": "johndoe"
      },
      "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Cache-Control": "no-cache",
          "Connection": "close",
          "Content-Length": "41",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "httpbin.org",
          "Postman-Token": "84e75b24-dc85-47c8-91cc-dfd7b39ba79f",
          "User-Agent": "PostmanRuntime/7.6.0"
      },
      "json": null,
      "origin": "69.136.117.201",
      "url": "http://httpbin.org/delete"
  }
  ```

> Run All Postman Unit Test Results

![PUT Test Results](public/img/Postman_Example_All_Test_Run_Results.jpg?raw=true 'Title')
