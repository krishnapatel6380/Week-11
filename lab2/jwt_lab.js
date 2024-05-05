const jwt = require('jsonwebtoken');

// Function to create and sign a JWT
function createJWT() {
    const payload = {
      userId: 123,
      username: 'exampleUser'
    };
    const secretKey = 'yourSecretKey'; // Replace with your secret key
  
    // Sign the JWT with the payload and secret key
   // const token = jwt.sign(payload, secretKey);

   const options = {

    expiresIn: '60s'  // Expires in 3 seconds
  
  };
  
   
  // Sign the JWT token
  
  const token = jwt.sign(payload, secretKey, options);
  
    console.log('JWT Token:', token);
  }
  
  // Call the function to create and sign a JWT
  createJWT();


  // Function to verify a JWT
function verifyJWT(token) {
    const secretKey = 'yourSecretKey'; // Replace with your secret key
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Failed:', err.message);
      } else {
        console.log('JWT Verified. Decoded:', decoded);
      }
    });
  }
  
  // Replace 'yourTokenHere' with a JWT token you generated in Step 4
  const jwtTokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTcxMzg3NjcxOSwiZXhwIjoxNzEzODc2Nzc5fQ.VGmxXh0cKtmX0m_MiDgElmqJdKPf4fNmnd8DfEnPffg';
  // Call the function to verify the JWT
  verifyJWT(jwtTokenToVerify);

  // Function to decode a JWT
function decodeJWT(token) {
    const decoded = jwt.decode(token);
  
    console.log('Decoded JWT:', decoded);
  }
  
  // Replace 'yourTokenHere' with a JWT token you generated in Step 4
  const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTcxMzg3NjYxMywiZXhwIjoxNzEzODc2NjIzfQ.FRPoNorOGC8IZfh2V2z06w68z9Ic9XzwaRRPtCVm0xg';
  // Call the function to decode the JWT
  decodeJWT(jwtToken);