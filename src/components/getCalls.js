import axios from "axios";
async function fetchData(archived) {
  try {
    const response = await fetch(
      "https://aircall-backend.onrender.com/activities"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    const dataFiltered = result.filter((call) => {
      return call.is_archived === archived;
    });
    return dataFiltered;
  } catch (error) {
    console.log("Error in fetchData request: ", error.message);
    throw error;
  } finally {
  }
}
async function patchCall(id, is_archived) {
  try {
    const response = await axios.patch(
      `https://aircall-backend.onrender.com/activities/${id}`,
      {
        is_archived: !is_archived,
      }
    );
    if (response.ok) return true;
  } catch (error) {
    console.log("Error in PathCall request", error.message);
    return false;
  } finally {
  }
}

async function patchReset() {
  try {
    const response = await axios.patch(
      `https://aircall-backend.onrender.com/reset`
    );
    if (response.ok) return true;
  } catch (error) {
    console.log("Error in patchReset request: ", error.message);
    return false;
    //setError(error.response ? error.response.data.message : error.message);
  } finally {
  }
}

export { fetchData, patchCall, patchReset };
