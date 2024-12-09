

export const BASE_URL = 'http://192.168.1.13:8080/api';

// export const Signupusers = async (users) => {
//   const response = await fetch(`${BASE_URL}/users`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(users),
//   });
//   if (!response.ok) throw new Error('Failed to create user');
//   return response.json();
// };

// export const loginUsers = async (email, password) => {
//   try {
//     const response = await fetch(`${BASE_URL}/users/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         userEmail: email,
//         userPassword: password,
//       }),
//     });
//     const text = await response.text(); // Read raw response as text for debugging
//     console.log('Raw Response:', text);

//     if (!response.ok) {
//       // If response is not OK, throw an error with raw response text
//       throw new Error(text);
//     }

//     return JSON.parse(text); // Parse and return JSON only for valid responses
//   } catch (error) {
//     console.error('Error in loginUsers:', error);
//     throw error;
//   }
// };

// //  this is valid when only json data is comming 
// // export const loginUsers = async (email, password) => {
// //   const response = await fetch(`${BASE_URL}/login`, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify({
// //       userProviderEmail: email,
// //       userPassword: password,
// //     }),
// //   });

// //   if (!response.ok) {
// //     const errorData = await response.json();
// //     throw new Error(errorData.error || 'Login failed');
// //   }

// //   return response.json();
// // };


// export const ServiceCatering = async () => {
//   const url = `${BASE_URL}/services/search/type?type=catering`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Check for HTTP errors
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//     }

//     // Parse and return the JSON data
//     const data = await response.json();
//     // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
//     return data;
//   } catch (error) {
//     console.error('Error fetching catering service data:', error.message);
//     throw error; // Ensure error is rethrown for proper handling
//   }
// };

// export const ServiceVenue = async () => {
//   const url = `${BASE_URL}/services/search/type?type=venue`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Check for HTTP errors
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//     }

//     // Parse and return the JSON data
//     const data = await response.json();
//     // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
//     return data;
//   } catch (error) {
//     console.error('Error fetching catering service data:', error.message);
//     throw error; // Ensure error is rethrown for proper handling
//   }
// };

// export const ServiceTransportation = async () => {
//   const url = `${BASE_URL}/services/search/type?type=transportation`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Check for HTTP errors
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//     }

//     // Parse and return the JSON data
//     const data = await response.json();
//     // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
//     return data;
//   } catch (error) {
//     console.error('Error fetching catering service data:', error.message);
//     throw error; // Ensure error is rethrown for proper handling
//   }
// };

// export const ServiceDecoration = async () => {
//   const url = `${BASE_URL}/services/search/type?type=decoration`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Check for HTTP errors
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//     }

//     // Parse and return the JSON data
//     const data = await response.json();
//     // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
//     return data;
//   } catch (error) {
//     console.error('Error fetching catering service data:', error.message);
//     throw error; // Ensure error is rethrown for proper handling
//   }
// };
export const Signupusers = async (users) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(users),
  });
  if (!response.ok) throw new Error('Failed to create user');
  return response.json();
};

export const loginUsers = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    });
    const text = await response.text(); // Read raw response as text for debugging
    console.log('Raw Response:', text);

    if (!response.ok) {
      // If response is not OK, throw an error with raw response text
      throw new Error(text);
    }

    return JSON.parse(text); // Parse and return JSON only for valid responses
  } catch (error) {
    console.error('Error in loginUsers:', error);
    throw error;
  }
};

//  this is valid when only json data is comming 
// export const loginUsers = async (email, password) => {
//   const response = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       userProviderEmail: email,
//       userPassword: password,
//     }),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.error || 'Login failed');
//   }

//   return response.json();
// };


export const ServiceCatering = async () => {
  const url = `${BASE_URL}/services/search/type?type=catering`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data:', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};

export const ServiceVenue = async () => {
  const url = `${BASE_URL}/services/search/type?type=venue`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data:', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};

export const ServiceTransportation = async () => {
  const url = `${BASE_URL}/services/search/type?type=transportation`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data:', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};

export const ServiceDecoration = async () => {
  const url = `${BASE_URL}/services/search/type?type=decoration`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data:', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};


export const ServiceAll = async () => {
  const url = `${BASE_URL}/services`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data:', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};

export const GetProfileData = async (id) => {
  const url = `${BASE_URL}/users/${id}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    // console.log('ServiceCatering Response Data:', data); // Logs the data for debugging
    return data;
  } catch (error) {
    console.error('Error fetching catering service data (ID: ${id}):', error.message);
    throw error; // Ensure error is rethrown for proper handling
  }
};