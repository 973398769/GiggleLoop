const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const generateGif = async (prompt) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/generate/gif`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Generation failed:", error);
    return { status: "error", error: error.message };
  }
};

export const generateVideo = async (prompt) => {

};