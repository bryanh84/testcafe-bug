# testcafe-bug
Sample Application and test case for reproducing Testcafe issue 3721

## Steps to Reproduce
1. npm install
2. npm start
3. Go to http://localhost:3000 in your browser and open the developer tools
4. Press the "Send Post" button
5. Note that a POST request is made and that the Request Headers contain a content-type header with value application/json
6. Execute "npm run reproduce-issue". The test script will hit a breakpoint.
7. Click the Unlock Page button and open the developer tools. Go to the Network requests.
8. Click the "Send Post" button and inspect the POST that was just made. Note that the content-type request header is not present.
