"use client"
import Image from "next/image"
import Link from "next/link"
import PageTitle from "../../../components/PageTitle"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Singup(){
  const router = useRouter()
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const [alert, setAlert] = useState({ type: "", message: "" })

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) router.push("/Dashboard") // If already signed in
  }, [router])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = formData

    if (!name || !email || !password) {
      setAlert({ type: "error", message: "All fields are required." })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setAlert({ type: "error", message: "Invalid email format." })
      return
    }
    if (password.length < 6) {
      setAlert({ type: "error", message: "Password must be at least 6 characters long." })
      return
    }

    // Save user data in localStorage
    const userData = { name, email, password }
    localStorage.setItem("userData", JSON.stringify(userData))
    setAlert({ type: "success", message: "Signup successful! Redirecting to login..." })

    setTimeout(() => router.push("/login"), 2000)
  }

  return(
    <>
    <PageTitle />
      <div className="md:min-h-screen flex items-center justify-center p-4">
    <div className="max-w-4xl mx-auto shadow-[0_2px_10px_-3px_rgba(14,14,14,0.3)] rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-5 items-center">
        <div className="md:col-span-2 max-md:order-1 relative before:absolute before:inset-0 before:bg-[#A31D1D]/70 overflow-hidden w-full h-full">
          <div className="md:aspect-[6/10] max-sm:aspect-[6/7]">
            <img src="https://readymadeui.com/images/real-estate-img.webp" className="w-full h-full object-cover" alt="signup-image" />
          </div>
          <div className="absolute inset-0 m-auto flex items-end justify-center max-md:text-center">
            <div className="bg-gradient-to-t from-black/50 via-black/50 to-transparent p-6 w-full">
              <div className="max-w-md mx-auto">
                <h1 className="text-white text-3xl font-semibold">Sign Up Now!</h1>
                <p className="text-slate-300 text-[15px] font-medium mt-6 leading-relaxed">
                  We connect you with top influencers to boost your content, expand your reach, and drive engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 w-full p-6 md:p-8 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h2 className="text-slate-900 text-2xl font-semibold">Register Now</h2>
            </div>

            {alert.message && (
              <div className={`mb-4 text-sm p-3 rounded-md ${alert.type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>
                {alert.message}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="text-slate-900 text-sm font-medium block mb-2">Name</label>
                <div className="relative flex items-center">
                  <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full text-sm text-slate-900 border-b border-slate-300 focus:border-[#A31D1D] pr-8 px-2 py-3 outline-none" placeholder="Enter name" />
                </div>
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" value={formData.email} onChange={handleChange} type="text" className="w-full text-sm text-slate-900 border-b border-slate-300 focus:border-[#A31D1D] pr-8 px-2 py-3 outline-none" placeholder="Enter email" />
                </div>
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input name="password" value={formData.password} onChange={handleChange} type="password" className="w-full text-sm text-slate-900 border-b border-slate-300 focus:border-[#A31D1D] pr-8 px-2 py-3 outline-none" placeholder="Enter password" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button type="submit" className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-[#A31D1D] hover:bg-slate-900 focus:outline-none cursor-pointer">
                Create an account
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <Link href="/login" className="text-[#A31D1D] font-medium hover:underline ml-1">Login here</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
