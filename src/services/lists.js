async function fetchLists() {
  try {
    const response = await fetch("https://my-json-server.typicode.com/JeftePL/fake-rest-api/to-do-list-craft");
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
