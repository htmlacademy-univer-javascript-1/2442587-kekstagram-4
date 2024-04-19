const BASE_URL = 'https://your-server-address.com';


async function fetchData() {
  try {
    const response = await fetch(`${BASE_URL}/data-path`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


async function postData(formData) {
  try {
    const response = await fetch(`${BASE_URL}/submit-path`, {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}

export { fetchData, postData };
