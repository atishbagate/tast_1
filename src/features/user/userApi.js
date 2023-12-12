//api to create new user for signup
export async function createUserApi(data) {
  const params = {
    role_id: 3,
    first_name: data.name,
    last_name: data.lastName,
    email: data.email,
    mobile: data.phoneNumber,
    password: data.password,
  };

  //post request to api to create the new user
  const response = await fetch(`https://stagrecords.swasth.net/api/signup`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const d = await response.json();

  return new Promise((resolve, reject) => {
      if (d.status === "failed") {
      reject(d.message);
    } else {  
        resolve({ data: undefined, message: "Signned up successfully please check your mail." });
      }
  })
}

export async function loginUserApi(data) {
  //post request to api to create the new user
  const response = await fetch(`https://stagrecords.swasth.net/api/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const d = await response.json();

  console.log(d);
 
return new Promise((resolve, reject) => {
    if (d.status === "failed") {
      reject(d.message);
    } else {
      localStorage.setItem("userId", d.user_id);
      localStorage.setItem("token", d.token);
      const newUser = {
        userId: d.user_id,
        token: d.token,
      };
      resolve({ data: newUser });
    }
  }); 
} 

export async function editUserApi(data) {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userId");

  const params = {
    user_id:user_id,
    first_name: data.name,
    last_name: data.lastName,
    email: data.email,
    mobile: data.phoneNumber,
  };
  console.log(params);

const res = await fetch(`https://stagrecords.swasth.net/api/editprofile`,
    {
      method: "PUT",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        swasthtoken: token,
      },
    })
    const d = await res.json();

    console.log(d);
  return new Promise((resolve, reject) => {
    if (d.status === "success") {
      resolve({data:"User Details updated successfully."});
    } else {
      reject( "Unable to update details now,please try after sometime.");
    }
  });
}

export async function logOutUserApi() {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userId");

  console.log(token + " " + user_id);

  const response = await fetch(`https://stagrecords.swasth.net/api/logout`, {
    method: "POST",
    body: JSON.stringify({"user_id":user_id}),
    headers: {
      "Content-Type": "application/json",
      swasthtoken: token,
    },
  });
  const d = await response.json();

  
  return new Promise((resolve, reject) => {
    if(d.status === "success"){ 
      localStorage.clear();
      resolve({ data: "User Logged out successfully"}); 
    }else{
      reject("User not Able to logout.")
    }
  });

}

export async function getUserDetailsAPI() {
  console.log("started the userdetails api function")
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userId");
  const params = {"user_id":user_id};

  const response = await fetch(`https://stagrecords.swasth.net/api/myprofile`, {
    method: "POST",
    body: JSON.stringify(params), headers: {
      "Content-Type": "application/json",
      swasthtoken: token,
    },
  });
  const d = await response.json();

  console.log(d);
  return new Promise((resolve, reject) => {
    if(d.status === "success"){
      resolve({data:d.result[0]});
    } else {
      reject("Unable to get user details");
    }
  }); 
  
}


