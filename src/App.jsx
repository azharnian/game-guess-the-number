// by Anas Azhar
import { useContext } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Context
import { UserProvider } from "./contexts/User"
import { GameProvider } from "./contexts/Game"

// Pages
import Header from "./components/Header"
import Footer from "./components/Footer"
import FrontPage from "./pages/FrontPage"
import StartGamePage from "./pages/StartGamePage"
import BinaryGamePage from "./pages/BinaryGamePage"
import LinearGamePage from "./pages/LinearGamePage"
import TopicsPage from "./pages/TopicsPage"
import HowToPlayPage from "./pages/HowToPlayPage"
import HelpPage from "./pages/HelpPage"
import ProfilePage from "./pages/ProfilePage"
import GamePage from "./pages/GamePage"

export default function App(){

  return (
    <BrowserRouter>
          <UserProvider>
          <GameProvider>
            <Header></Header>
              <section className="main-page">
                <Routes>
                    <Route path="/" element={<FrontPage />} ></Route>
                    <Route path="/topics" element={<TopicsPage />}></Route>
                    <Route path="/help" element={<HelpPage />}>-</Route>
                    <Route path="/howto" element={<HowToPlayPage />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>
                    <Route path="/start" element={<StartGamePage />}></Route>
                    <Route path="/linear-game" element={<LinearGamePage />}></Route>
                    <Route path="/binary-game" element={<BinaryGamePage />}></Route>
                    <Route path="/game" element={<GamePage/>}></Route>
                </Routes>
              </section>
            
            <Footer></Footer>
          </GameProvider>
          </UserProvider>
      </BrowserRouter>
  )
}