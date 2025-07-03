import Navbar from "./widgets/Navbar"

/**
 * Landing page to hook users into the game. 
 * Not to be confused with the home page which shows user profile, leaderboard, etc.
 * 
 * Navigates to the home page or login page if not authenticated.
 */
function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
    </div>
  )
}

export default App
