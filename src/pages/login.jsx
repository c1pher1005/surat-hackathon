import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalTheme } from "@web3modal/ethers5/react";
import user from "../assets/images/user.png"
import lawyer from "../assets/images/lawyer.png"
import clerk from "../assets/images/clerk.png"
import judge from "../assets/images/judge.png"
import bg from "../assets/images/sc.webp"

export default function Login() {
    const [selection, setSelection] = useState()
    const { open } = useWeb3Modal()
    const { address, isConnected } = useWeb3ModalAccount()
    const { setThemeMode } = useWeb3ModalTheme()
    setThemeMode("light")

    useEffect(() => {
        setTimeout(() => {
            // sessionStorage.clear();
            console.log("ok")
            window.location.href = "";
        }, 10000)
    }, [isConnected])

    useEffect(() => {
        if (!isConnected && selection)
            sessionStorage.setItem("USER_TYPE", selection)
    }, [isConnected, selection])

    useEffect(() => {
        if (isConnected) {
            sessionStorage.setItem("ADDR", address)
        }
    }, [isConnected, address])

    function login() {
        if (!selection) {
            toast("Make a selection before loging in", { icon: "⚠️", duration: 2569 })
        } else {
            open()
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-100">
            <Toaster />
            <img src={bg} draggable={false} className="absolute left-0 top-0 w-screen h-screen object-cover opacity-50 z-0" alt="background" />
            <div className="text-black text-3xl z-10 font-bold uppercase">Select user type</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 m-5 z-10">
                <button className={`flex flex-col ring-1 ring-black/50 justify-center items-center rounded-xl ${selection == "USER" ? "bg-green-300" : "bg-white/50"}`}
                    onClick={() => setSelection("USER")}>
                    <img src={user} alt="user" width={169} draggable={false} />
                    <div className="text-xl">user</div>
                </button>
                <button className={`flex flex-col ring-1 ring-black/50 justify-center items-center rounded-xl ${selection == "LAWYER" ? "bg-green-300" : "bg-white/50"}`}
                    onClick={() => setSelection("LAWYER")} >
                    <img src={lawyer} alt="user" width={169} draggable={false} />
                    <div className="text-xl">lawyer</div>
                </button>
                <button className={`flex flex-col ring-1 ring-black/50 justify-center items-center rounded-xl ${selection == "CLERK" ? "bg-green-300" : "bg-white/50"}`}
                    onClick={() => setSelection("CLERK")} >
                    <img src={clerk} alt="user" width={169} draggable={false} />
                    <div className="text-xl">clerk</div>
                </button>
                <button className={`flex flex-col ring-1 ring-black/50 justify-center items-center rounded-xl ${selection == "JUDGE" ? "bg-green-300" : "bg-white/50"}`}
                    onClick={() => setSelection("JUDGE")} >
                    <img src={judge} alt="user" width={169} draggable={false} />
                    <div className="text-xl">judge</div>
                </button>
            </div>
            <div className="bg-white z-10 ring-1 ring-black/50 rounded-full">
                {isConnected ? <w3m-button /> : <button className="m-1 mx-3" onClick={login}>Login with Blockchain</button>}
            </div>
        </div>
    )
}
