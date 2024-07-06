const endpoint = "https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/";
const accessToken = "0e186445-0647-417c-ae27-8098533f1914";
const campaignId = "6a0fa162-fb4c-4074-a6d4-402744e3590b";
const country = "IRAQ";
const encryptionKey = "FtmJ7frzTyWOzintybbqIWzwwclcPtaI";

const phoneNumberInput = document.getElementById('phone-number');

document.getElementById('continue-btn').addEventListener('click', async () => {
  const phoneNumber = phoneNumberInput.value;

  // Make API request to send verification code
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        country,
        campaign_id: campaignId
      })
    });

    const data = await response.json();
    console.log(data);

    // Handle API response
    if (data.status === 'uccess') {
      // Display verification code input field
      const verificationCodeInput = document.createElement('input');
      verificationCodeInput.type = 'tel';
      verificationCodeInput.placeholder = 'Verification code';
      document.body.appendChild(verificationCodeInput);

      // Add event listener to verify button
      const verifyButton = document.createElement('button');
      verifyButton.textContent = 'Verify';
      document.body.appendChild(verifyButton);

      verifyButton.addEventListener('click', async () => {
        const verificationCode = verificationCodeInput.value;
