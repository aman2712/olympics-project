const apiCall = async ({ endpoint, method, body, secured = false }) => {
  const token = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;

  const headers = {
    "Content-Type": "application/json",
    Authorization: secured && `Bearer ${token}`,
  };

  const response = await fetch(`http://localhost:5000/api${endpoint}`, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });

  const resp = await response.json();

  if (!response.ok) {
    return { error: true, data: resp };
  }

  return { error: false, data: resp };
};

export default apiCall;
