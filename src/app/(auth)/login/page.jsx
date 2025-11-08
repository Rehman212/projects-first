"use client"
import Image from "next/image"
import Link from "next/link"
import PageTitle from "../../../components/PageTitle"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Login(){
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [alert, setAlert] = useState({ type: "", message: "" })
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) router.push("/Dashboard") // already logged in
  }, [router])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData

    if (!email || !password) {
      setAlert({ type: "error", message: "All fields are required." })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setAlert({ type: "error", message: "Invalid email format." })
      return
    }

    const storedUser = localStorage.getItem("userData")
    if (!storedUser) {
      setAlert({ type: "error", message: "No user found. Please sign up first." })
      return
    }

    const { email: savedEmail, password: savedPassword, name } = JSON.parse(storedUser)

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("user", JSON.stringify({ email, name })) // mark user logged in
      setAlert({ type: "success", message: "Login successful! Redirecting..." })
      setTimeout(() => router.push("/Dashboard"), 2000)
    } else {
      setAlert({ type: "error", message: "Invalid email or password." })
    }
  }

  return(
    <>
    <PageTitle />      
      <div className=" mt-10 mb-10 flex fle-col items-center justify-center p-6">
      <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight">
            Client Login – Access Your Project Dashboard
          </h1>
          <p className="text-[16px] mt-6 text-black leading-relaxed">Log in to your client portal to monitor ongoing projects, timelines, and reports.</p>
          <p className="text-[16px]  lg:mt-10 text-black">Don't have an account <Link href="/signup" className="text-[#A31D1D] font-medium hover:underline ml-1">Register here</Link></p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md lg:ml-auto w-full shadow-2xl p-7 rounded-2xl ">
          <h2 className="text-slate-900 text-3xl font-semibold mb-8">
            Sign in
          </h2>

          {alert.message && (
            <div className={`mb-4 text-sm p-3 rounded-md ${alert.type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>
              {alert.message}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Email" />
            </div>
            <div>
              <label className='text-sm text-slate-900 font-medium mb-2 block'>Password</label>
              <input name="password" value={formData.password} onChange={handleChange} type="password" className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent" placeholder="Enter Password" />
            </div>
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-[#A31D1D] hover:bg-black focus:outline-none cursor-pointer">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}
