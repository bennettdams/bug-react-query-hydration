export async function fetchUser() {
  if (typeof window === 'undefined') {
    return await (await fetch('http://localhost:3000/api/user')).json()
  } else {
    return await (await fetch('/api/user')).json()
  }
}
