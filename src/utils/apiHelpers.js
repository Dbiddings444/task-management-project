export async function apiRequest(
  url,
  method = "GET",
  data = null,
  token = null
) {
  try {
    const headers = { "Content-Type": "application/json" };

    // Add authorization token to headers if available

    const authToken = token || localStorage.getItem("token");
    if (authToken) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options = {
      method,
      headers,
    };

    // Add body for POST, PUT, or PATCH requests
    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    // Handle non-2xx HTTP statuses
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error.message);
    throw error; // Rethrow the error so the caller can handle it
  }
}
