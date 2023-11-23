const clearHistory = () => {
  localStorage.clear()
  sessionStorage.clear()
  setTimeout(() => {
    window.location.href = '/'
  }, 500)
}

const logout = () => {
  clearHistory()
}

export default logout
