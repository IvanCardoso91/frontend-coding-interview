export function login(email: string, password: string): boolean {
  console.log("Login attempt:", email, password);
  localStorage.setItem("auth", "true");
  return true;
}

export function isAuthenticated(): boolean {
  return localStorage.getItem("auth") === "true";
}

export function logout(): void {
  localStorage.removeItem("auth");
}
