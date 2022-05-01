import React, { useEffect, useState } from "react";
import ChatBotForm from "./ChatBotForm";

export const HomePage = () => {
  const [currLocation, setCurrLocation] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    ipv4: "",
  });
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Country is : ", response);
        setCurrLocation(response);
        setCurrLocation((currLocation) => ({
          ...currLocation,
          city: response.city,
          state: response.regionName,
          country: response.country,
          zipCode: response.zip,
          ipv4: response.query,
        }));
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);
  return (
    <div className="main_section">
      {show ? (
        <div className="main_sub_section">
          <ChatBotForm currLocation={currLocation} />
        </div>
      ) : (
        <div></div>
      )}
      <div className="chatBot" onClick={()=>setShow(!show)}>
        <p>{show?"Close":"Open"}</p>
      </div>
    </div>
  );
};
