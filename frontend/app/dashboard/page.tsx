"use client";

import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#F4F7FA] flex">

            {/* ================= SIDEBAR ================= */}
            <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
                <div className="flex items-center gap-3 mb-10">
                    <Image
                        src="/favicon-512x512.png"
                        alt="Civora Nexus"
                        width={36}
                        height={36}
                    />
                    <div>
                        <h2 className="font-bold text-lg text-[#142C52]">Civora Nexus</h2>
                        <p className="text-xs font-semibold text-[#1B9AAA]">CropGuard</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-4 text-sm font-medium text-[#142C52]">
                    <button className="text-left px-3 py-2 rounded-lg bg-[#E6F4F6] text-[#16808D]">
                        Dashboard
                    </button>
                    <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                        Crop Scan
                    </button>
                    <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                        Treatment Advice
                    </button>
                    <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                        Scan History
                    </button>
                    <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                        Weather Alerts
                    </button>
                    <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                        Support
                    </button>
                </nav>
            </aside>

            {/* ================= MAIN CONTENT ================= */}
            <main className="flex-1 p-6">

                {/* -------- Header -------- */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#142C52]">
                            Farmer Dashboard
                        </h1>
                        <p className="text-sm text-gray-600">
                            Monitor crop health and detect pests
                        </p>
                    </div>

                    <button
                        className="px-4 py-2 rounded-lg font-semibold text-white"
                        style={{ backgroundColor: "#16808D" }}
                    >
                        Logout
                    </button>
                </div>

                {/* -------- Stats Cards -------- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-sm text-gray-500">Crop Status</p>
                        <h3 className="text-xl font-bold text-[#22C55E]">Healthy</h3>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-sm text-gray-500">Last Scan</p>
                        <h3 className="text-xl font-bold text-[#142C52]">
                            No issues detected
                        </h3>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-sm text-gray-500">Weather Risk</p>
                        <h3 className="text-xl font-bold text-[#EF4444]">Low</h3>
                    </div>

                </div>

                {/* -------- Main Panels -------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Upload Panel */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="font-semibold text-[#142C52] mb-3">
                            Upload Crop Image
                        </h2>

                        <input
                            type="file"
                            className="w-full border rounded-lg px-3 py-2 mb-4"
                        />

                        <button
                            className="w-full py-2 rounded-lg font-semibold text-white"
                            style={{ backgroundColor: "#16808D" }}
                        >
                            Analyze Crop
                        </button>
                    </div>

                    {/* Result Panel */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="font-semibold text-[#142C52] mb-4">
                            Analysis Result
                        </h2>

                        <div className="space-y-3 text-sm">
                            <p>
                                <span className="font-semibold">Pest Detected:</span> —
                            </p>
                            <p>
                                <span className="font-semibold">Confidence:</span> —
                            </p>
                            <p>
                                <span className="font-semibold">Severity:</span> —
                            </p>
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-[#F4F7FA] text-sm text-gray-700">
                            Recommended treatment will appear here after analysis.
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}
