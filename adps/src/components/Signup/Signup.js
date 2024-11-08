import React from "react";
import { useState } from "react";

import "./Signup.css";
import { useHttpClient } from '../../httpClient/HttpClientContext';
function Signup() {
  //Context-object
  const httpClient = useHttpClient();
  /* Restaurant form */
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantPhone, setRestaurantPhone] = useState("");
  const [restaurantEmail, setRestaurantEmail] = useState("");
  const [restaurantPassword, setRestaurantPassword] = useState("");
  const [foodOptions, setRestarantOptions] = useState([]);
  //TO-DO: Add the other things

  /* Restaurant form end */

  /* Client form */
  const [role, setRole] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [clientfoodPreference, setClientFoodPreference] = useState([]);
  /*Client Form end */

  //CFe: Handle the form submissions
   const handleSubmitClient = (e) => {
    e.preventDefault();
    const clientData = {
      email: clientEmail,
      password: clientPassword,
      client_info: {
        name: clientName,
        phone: clientPhone,
        country: clientCountry,
        tags: clientfoodPreference
      },
      role_id : 1,
      restaurant_info: {}
    };
      const result =  httpClient.postAuth("/auth/signup", clientData);
      console.log(result);
       
    
  };
  
  const handleSubmitRestaurant = (e) => {
    e.preventDefault();
    const clientData = {
      email: clientEmail,
      password: clientPassword,
      client_info: {},
      role_id : 0,
      restaurant_info: {
        name: clientName,
        phone: clientPhone,
        //TO DO- Add the other things
        country: clientCountry,
        tags: clientfoodPreference
      }
    };
    httpClient.postAuth("/auth/signup", clientData);

    
  };

  /* code gives Rendering mistakes
  useEffect(() => {
    if (role === "restaurant") {
      document.getElementById("restaurantForm").style.display = "block";
      document.getElementById("clientForm").style.display = "none";
    } else if (role === "client") {
      document.getElementById("clientForm").style.display = "block";
      document.getElementById("restaurantForm").style.display = "none";
    }
  });*/

  return (
    /*--default page (no form)--*/
    <div id="signupDefault">
      <div className="container">
        <div id="welcomeSection">
          <h1>Welcome to our site!</h1>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div id="formSection">
          <div id="roleRadios">
            <p>Are you signing up as a :</p>
            <div>
              <input
                type="radio"
                id="restaurant"
                name="role"
                value="restaurant"
                onClick={() => setRole("restaurant")}
              />
              <label>Restaurant</label>
            </div>
            <div>
              <input
                type="radio"
                id="client"
                name="role"
                value="client"
                onClick={() => setRole("client")}
              />
              <label>Client</label>
            </div>
          </div>
  
          {/* Restaurant Form */}
          {role === "restaurant" && (
            <form id="restaurantForm" onSubmit={handleSubmitRestaurant} >
              <div>
                <label>name : </label>
                <input
                  type="text"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                />
              </div>
              <div>
                <label>email : </label>
                <input
                  type="text"
                  value={restaurantEmail}
                  onChange={(e) => setRestaurantEmail(e.target.value)}
                />
              </div>
              <div>
                <label>password : </label>
                <input
                  type="password"
                  value={restaurantPassword}
                  onChange={(e) => setRestaurantPassword(e.target.value)}
                />
              </div>
              <div>
                <label>phone : </label>
                <input
                  type="number"
                  value={restaurantPhone}
                  onChange={(e) => setRestaurantPhone(e.target.value)}
                />
              </div>
              <div>
                <select
                  name="foodOptions"
                  id="foodOptions"
                  value={foodOptions}
                  onChange={(e) => setRestarantOptions(e.target.value)}
                >
                  <option>vegan</option>
                  <option>vegetarian</option>
                  <option>lactose intolerant</option>
                  <option>omnivore</option>
                </select>
              </div>
              <input type="hidden" name="role" value="2" />
              <input type="submit" value="submit" />
            </form>
          )}
  
          {/* Client Form */}
          {role === "client" && (
            <form id="clientForm" onSubmit={handleSubmitClient}>
              <div>
                <label>name : </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div>
                <label>email : </label>
                <input
                  type="text"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
              </div>
              <div>
                <label>password : </label>
                <input
                  type="password"
                  value={clientPassword}
                  onChange={(e) => setClientPassword(e.target.value)}
                />
              </div>
              <div>
                <label>phone : </label>
                <input
                  type="number"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                />
              </div>
              <div>
                <label>country : </label>
                <input
                  type="text"
                  value={clientCountry}
                  onChange={(e) => setClientCountry(e.target.value)}
                />
              </div>
              <input type="hidden" name="role" value="1" />
              <div>
                <select
                  name="preference"
                  id="foodPreference"
                  value={clientfoodPreference}
                  onChange={(e) => setClientFoodPreference(e.target.value)}
                >
                  <option>vegan</option>
                  <option>vegetarian</option>
                  <option>lactose intolerant</option>
                  <option>omnivore</option>
                </select>
              </div>
              <input type="submit" value="submit" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Signup;
