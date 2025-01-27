document.getElementById('reportForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submission

  const form = e.target;

  // Collect form data
  const formData = new FormData(form);
  formData.append('access_key', 'b436bd63-068e-4d87-9b03-9bf8165d6d2a');

  try {
      const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
      });

      if (response.ok) {
          // Redirect to thank you page
          window.location.href = 'https://thankyou.ebill.minidushashimal.com';
      } else {
          alert('Submission failed. Please try again.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
  }
});
