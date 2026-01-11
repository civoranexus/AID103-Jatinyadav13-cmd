"use client";
import Image from "next/image";


export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F4F7FA" }}>

            {/* ================= NAVBAR ================= */}
            <header className="w-full bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/favicon-512x512.png"
                            alt="Civora Nexus Logo"
                            width={36}
                            height={36}
                            priority
                        />
                        <div>
                            <h1 className="text-lg font-bold" style={{ color: "#142C52" }}>
                                Civora Nexus
                            </h1>
                            <p className="text-xs font-semibold" style={{ color: "#1B9AAA" }}>
                                PVT LTD
                            </p>
                        </div>
                    </div>

                    {/* Info Buttons */}
                    <nav
                        className="hidden md:flex gap-6 text-sm font-medium"
                        style={{ color: "#142C52" }}
                    >
                        <button>Home</button>
                        <button>Services</button>
                        <button>Careers</button>
                        <button>Policies</button>
                    </nav>

                    {/* Support */}
                    <button
                        className="px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ backgroundColor: "#142C52", color: "#FFFFFF" }}
                    >
                        Support
                    </button>

                </div>
            </header>


            {/* ================= LOGIN SECTION ================= */}
            <main
                className="flex-1 flex items-center justify-center px-4"
                style={{
                    background: "linear-gradient(135deg, #071426, #142C52)",
                }}
            >
                <div
                    className="w-full max-w-md rounded-xl shadow-xl p-8"
                    style={{ backgroundColor: "#FFFFFF" }}
                >
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold" style={{ color: "#142C52" }}>
                            Login
                        </h2>
                        <p className="text-sm mt-1" style={{ color: "#1B9AAA" }}>
                            Secure access to Civora Nexus
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <input
                            type="text"
                            defaultValue="Username"
                            onFocus={(e) => (e.target.value === "Username" ? e.target.value = "" : null)}
                            onBlur={(e) => (e.target.value === "" ? e.target.value = "Username" : null)}
                            className="w-full px-4 py-3 rounded-lg border text-gray-400 focus:text-gray-700 focus:outline-none focus:ring-2"
                            style={{ borderColor: "#D1D5DB" }}
                        />

                        <input
                            type="password"
                            defaultValue="Password"
                            onFocus={(e) => (e.target.value === "Password" ? e.target.value = "" : null)}
                            onBlur={(e) => (e.target.value === "" ? e.target.value = "Password" : null)}
                            className="w-full px-4 py-3 rounded-lg border text-gray-400 focus:text-gray-700 focus:outline-none focus:ring-2"
                            style={{ borderColor: "#D1D5DB" }}
                        />


                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-semibold transition"
                            style={{
                                backgroundColor: "#16808D",
                                color: "#FFFFFF",
                            }}
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm">
                        <button style={{ color: "#1B9AAA" }}>
                            Forgot password?
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
