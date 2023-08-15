async function fetchLists() {
  try {
    const response = await fetch("http://localhost:3001/lists");
    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchLists;
