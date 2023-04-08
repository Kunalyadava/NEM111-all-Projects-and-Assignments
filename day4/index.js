// In http rest APIs we are stuck with a very limited set of verbs. 
// They are essentially:

// get: to load data
// post: to create new data
// put: to replace data
// patch: to update data
// delete: to remove data
// These are the verbs of a typical CRUD operation

// Out of 39 http methods, developers typically use the "GET", "POST",
//  "PUT", "PATCH" and "DELETE" methods.
// In this article, I will be showing you the difference
//  between the 5 methods mentioned above and when to use them.

// ✔ GET
// The GET method is used to retrieve resources from a
//  server. It is said to be a safe method as 
//  it does not change the state of the resource in any way.
// GET method is idempotent Thus calling this
//  method multiple times will always give the same result.

// Example URIs
// HTTP GET 'http://www.apidomain.com/users'
// HTTP GET 'http://www.apidomain.com/users?size=20&page=5'
// HTTP GET 'http://www.apidomain.com/users/123'
// HTTP GET 'http://www.apidomain.com/users/123/address'
// ✔ POST
// POST method is used to create a new resource 
// into the collection of resources on a server.
// It is important to note that POST is Non-idempotent.
//  Thus invoking two identical POST requests will result 
//  in duplicate information being created on the server.

// Example URIs
// HTTP POST 'http://www.apidomain.com/users'
// HTTP POST 'http://www.apidomain.com/users/123/accounts'
// ✔ PUT
// PUT is used to update the existing resource on the 
// server and it updates the full resource.
// If the resource does not exist, PUT may decide to create a new resource.
// PUT method is idempotent Thus calling this method multiple
//  times will always update the same resource multiple times.

// Example URIs
// HTTP PUT 'http://www.apidomain.com/users/123'
// HTTP PUT 'http://www.apidomain.com/users/123/accounts/456'
// ✔ PATCH
// PATCH is used to update the existing resource 
// on the server and it updates a portion of the resource.
// If the resource does not exist, PUT may decide to 
// create a new resource.
// Just as the PUT method, PATCH is also idempotent

// Example URIs
// HTTP PATCH 'http://www.apidomain.com/users/123'
// HTTP PATCH 'http://www.apidomain.com/users/123/accounts/456'
// ✨PATCH vs PUT
// PUT method primarily fully replaces an entire
//  existing resource but PATCH partially updates an existing resource.

// The PATCH method is not a substitute to 
// the PUT method. It applies a delta (diff) rather than replacing 
// the entire resource.

// ✔ DELETE
// DELETE Method is used to delete the resources from a server. 
// It deletes resource identified by the Request-URI.
// DELETE method are idempotent.
// Conclusion
// As a backend developer, It is very important to follow the
//  standard approach in building your API.

const http=require("http")
const server=http.createServer((req,res)=>{
    //logic of the server
})


//running the server
server.listen(4500,()=>{
    console.log("server is running at port 4500")
})
//The server. listen() method creates a listener on the specified port or path.
//listen means
//port number acts like a parking lot 