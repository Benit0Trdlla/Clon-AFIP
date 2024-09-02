import Footer from "./components/Footer"
import { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRouter } from "./Router"
function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
        </Suspense>
      </Router>
      <Footer />
    </>
  )
}

export default App
