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
      window.location.href = "https://mythvendix.000webhostapp.com/surat/judge/template/"
    }
  }, [isConnected])

  function logout() {
    setLogoutFlag(true)
  }
}
