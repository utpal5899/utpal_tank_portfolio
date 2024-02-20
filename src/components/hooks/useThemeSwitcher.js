import React, { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  let preferDarkQuery = "(prefer-color-scheme: dark)";
  let [mode, setmode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    console.log(userPref)
    const handleChange = () => {
      console.log("fewf")
      if (userPref) {
        let check = userPref == "dark" ? "dark" : "light";
        setmode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.add("light");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setmode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.add("light");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(()=>{
    console.log(mode)
    if(mode==="dark"){
        window.localStorage.setItem("theme","dark")
        document.documentElement.classList.add("dark")
    }
    else{

        window.localStorage.setItem("theme","light")
        document.documentElement.classList.remove("dark")
    }
  }
  ,[mode])


  return [mode,setmode]
 
 
}
