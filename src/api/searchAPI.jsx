const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const searchAPI = async (name) => {
  const response = await fetch(`${API_BASE_URL}/search/name?name=${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};
