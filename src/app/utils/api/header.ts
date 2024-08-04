// function GetHeader(isPublicRoute: boolean) {
//   return {
//     "Content-Type": "application/json",
//     Authorization: isPublicRoute ? "" : localStorage.getItem("token"),
//   };
// }

// export default GetHeader;

// src/services/header.ts

function GetHeader(headers?: Record<string, string>) {
  const token = localStorage.getItem("token");
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders.Authorization = "Bearer " + token;
  }

  if (headers) {
    return { ...defaultHeaders, ...headers };
  }

  return defaultHeaders;
}

export default GetHeader;
