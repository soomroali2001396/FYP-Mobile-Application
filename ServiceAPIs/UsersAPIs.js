const BASE_URL = 'http://172.16.89.65:8080/api/users';

export const Signupusers = async (users) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(users),
  });
  if (!response.ok) throw new Error('Failed to create user');
  return response.json();
};

export const loginUsers = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
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