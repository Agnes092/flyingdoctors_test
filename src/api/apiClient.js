// API 클라이언트 설정
const API_BASE_URL = 'https://api.example.com';

// 기본 fetch 함수
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    throw error;
  }
};

// API 메소드
export const api = {
  get: (url, options = {}) => fetchData(url, { method: 'GET', ...options }),
  post: (url, data, options = {}) => fetchData(url, { method: 'POST', body: JSON.stringify(data), ...options }),
  put: (url, data, options = {}) => fetchData(url, { method: 'PUT', body: JSON.stringify(data), ...options }),
  delete: (url, options = {}) => fetchData(url, { method: 'DELETE', ...options }),
}; 