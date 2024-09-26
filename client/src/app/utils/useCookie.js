
//user , pass cookie name   
export  const getCookie = (name) => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
   
    return cookies ? cookies : null;
   };


   //pass this str user=j%3A%7B%22name%22%3A%22asdf%22%2C%22prn%22%3A%22123%22%2C%22email%22%3A%2212312%22%7D , returns a json string

export   const parseCookie = str =>
    str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});


      //GettingName -> get the any value from cookie string 
export const getPropertyFromCookie = (cookieString, requiredProperty) =>  {
    if (!cookieString || !requiredProperty) {
        throw new Error("Both cookieString and requiredProperty are required parameters.");
    }

    try {
        // Remove the 'j:' prefix and parse the remaining string as JSON
    
        
        const jsonObject = JSON.parse(cookieString.slice(2));
        // Return the required property from the parsed object
        return jsonObject[requiredProperty];
    } catch (error) {
        console.error("Failed to parse the cookie string or retrieve the property:", error);
        return null; // or handle the error as needed
    }
}
