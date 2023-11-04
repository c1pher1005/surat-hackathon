import { useEffect, useState } from "react"
// import toast, { Toaster } from 'react-hot-toast';
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalTheme } from "@web3modal/ethers5/react";
import { Link } from "react-router-dom"
import chatbot from "../assets/images/chatbot.png"

export default function Dashboard() {
  const [userType, setUserType] = useState("OK")
  const [logoutFlag, setLogoutFlag] = useState(false)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const { address, isConnected } = useWeb3ModalAccount()
  const { setThemeMode } = useWeb3ModalTheme()
  setThemeMode("light")

  useEffect(() => {
    setUserType(sessionStorage.getItem("USER_TYPE"))
  }, [])

  useEffect(() => {
    if (!isConnected && logoutFlag) {
      sessionStorage.clear()
      window.location.href = "/"
    }
  }, [isConnected])

  function logout() {
    setLogoutFlag(true)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute bottom-10 right-10">
        <button onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
          <img src={chatbot} alt="chatbot" width={69} height={69} />
        </button>
      </div>
      {
        isChatbotOpen && <div className="absolute right-5 top-5 w-[92vw] sm:w-[50vw] h-[80vh] z-30 bg-black/50">
          <iframe src="https://lawbotpro.com/" className="w-[92vw] sm:w-[50vw] h-[80vh]" title="chatbot" />
        </div>
      }
      <div className="w-full min-h-screen">
        <div className="w-full p-3 font-bold text-xl bg-amber-300 flex justify-between items-center">
          <div>{userType} DASHBOARD</div>
          <div onClick={logout} className="bg-white rounded-full">
            <w3m-button />
          </div>
        </div>
      </div>
    </div>
  )
}