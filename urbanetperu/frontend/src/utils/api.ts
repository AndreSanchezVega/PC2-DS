const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

type RequestOptions = {
  method?: string;
  token?: string;
  body?: unknown;
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", token, body } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const backendMessage =
      data && typeof data === "object" && "message" in data
        ? String((data as { message?: string }).message)
        : "";
    const message = backendMessage || `Error en la solicitud (${response.status})`;
    throw new Error(message);
  }

  return data as T;
}
