// Constructor to create an XHR object
class coreHTTP{
  //because we dont have anything to initialize, the constructor can be blank // we need it to create the class
 constructor (){}

/* <<< HTTP GET request >>> */
  //coreHTTP.prototype.get = function(url, callback) {
  // Open the connection
  // this.http.open("GET", url);

  // // Process the request when it is returned.
  // this.http.onload = () => {
  //   if (this.http.status >= 200 && this.http.status <= 299) {
  //     callback(null, this.http.responseText);
  //   } else {
  //     callback(`GET Error: ${this.http.status}`);
  //   }
  // }

  async get(url,callback){
    try {
      const response = await fetch(url);
      let result = await response.json();
      if (response.ok){
        console.log(result);
        callback(null, JSON.stringify(result));
      } else {
        console.log("Failed", result);
        callback(JSON.stringify(response, ""));
      }
    }
    catch (error) {
      console.log("Error:", error);
    }
  }
/* <<< HTTP POST request >>> */
// coreHTTP.prototype.post = function(url, data, callback) {
//   // this.http.open("POST", url);
//   // this.http.setRequestHeader("content-type","application/json");

//   // this.http.onload = () => {
//   //   if (this.http.status >= 200 && this.http.status <= 299) {
//   //     callback(null, this.http.responseText);
//   //   } else {
//   //     callback(`POST Error: ${this.http.status}`);
//   //   }
//   // }

//   // this.http.send(JSON.stringify(data));
// }
async post(url,data, callback){
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();
    if (response.ok){
      console.log(result);
      callback(null, JSON.stringify(result));
    } else {
      console.log("Failed", result);
      callback(JSON.stringify(response, ""));
    }
  }
  catch (error) {
    console.log("Error:", error);
  }
}


// /* <<< HTTP PUT request >>> */
// coreHTTP.prototype.put = function(url, data, callback) {
//   this.http.open("PUT", url);
//   this.http.setRequestHeader("content-type","application/json");

//   this.http.onload = () => {
//     if (this.http.status >= 200 && this.http.status <= 299) {
//       callback(null, this.http.responseText);
//     } else {
//       callback(`PUT Error: ${this.http.status}`);
//     }
//   }

//   this.http.send(JSON.stringify(data));
// }
async put(url,data, callback){
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();
    if (response.ok){
      console.log(result);
      callback(null, JSON.stringify(result));
    } else {
      console.log("Failed", result);
      callback(JSON.stringify(response, ""));
    }
  }
  catch (error) {
    console.log("Error:", error);
  }
}
// /* <<< HTTP DELETE request >>> */
// coreHTTP.prototype.delete = function(url, callback) {
//   this.http.open("DELETE", url);
  
//   this.http.onload = () => {
//     if (this.http.status >= 200 && this.http.status <= 299) {
//       callback(null, "User Deleted");
//     } else {
//       callback(`DELETE Error: ${this.http.status}`);
//     }
//   }

//   this.http.send();  
// }
async delete(url, callback){
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });

    let result = await response.json();
    if (response.ok){
      console.log(result);
      callback(null, JSON.stringify(result));
    } else {
      console.log("Failed", result);
      callback(JSON.stringify(response, ""));
    }
  }
  catch (error) {
    console.log("Error:", error);
  }
}

async patch(url,data, callback){
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();
    if (response.ok){
      console.log(result);
      callback(null, JSON.stringify(result));
    } else {
      console.log("Failed", result);
      callback(JSON.stringify(response, ""));
    }
  }
  catch (error) {
    console.log("Error:", error);
  }
}
}