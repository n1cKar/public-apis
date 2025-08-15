"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ApiItem } from "@/types/types";
import apiData from "../data/public-apis.json"; // Import JSON

export default function Home() {
  const [search, setSearch] = useState("");

  const apis: ApiItem[] = (apiData as any).apis || [];

  const filteredApis = apis
    .filter(
      (api) =>
        api.name.toLowerCase().includes(search.toLowerCase()) ||
        api.description.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 12); // display maximum 12 APIs

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <h1 className="text-2xl font-['Pacifico'] text-blue-600 dark:text-blue-400">
                PublicAPIs
              </h1>
            </Link>
            <Link href="#main-content">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base">
                View APIs
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto my-12 sm:my-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center bg-gray-800 rounded-lg text-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About PublicAPIs</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          PublicAPIs is a curated directory of free APIs that developers can use for
          learning, prototyping, or building applications. Explore hundreds of APIs
          across various categories, quickly search by name or description, and access
          endpoints and documentation directly. Our goal is to make discovering APIs
          fast, easy, and organized for developers of all skill levels.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-gray-100">
              Extensive API Collection
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Access a curated list of hundreds of free public APIs across multiple categories.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-gray-100">
              Real-Time Search
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              Quickly find APIs by name or description using our instant search functionality.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg text-gray-900 dark:text-gray-100">
              Easy Access & Documentation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              View endpoint details, HTTP methods, and example requests directly from the directory.
            </p>
          </div>
        </div>

        <hr className="mt-12 border-gray-300 dark:border-gray-700" />
      </section>

      {/* Main API Display Section */}
      <div className="max-w-7xl mx-auto p-4 space-y-6" id="main-content">
        <h1 className="text-2xl sm:text-3xl font-bold">Public API Directory</h1>

        <input
          type="text"
          placeholder="Search APIs..."
          className="w-full p-2 sm:p-3 border rounded-lg mb-4 dark:bg-gray-800 dark:text-white text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4 sm:p-6">
          {filteredApis.map((api) => (
            <div
              key={api.name}
              className="border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{api.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">{api.description}</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span className="font-semibold">Method:</span> {api.method}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span className="font-semibold">Endpoint:</span>{" "}
                <a
                  href={api.endpoint}
                  target="_blank"
                  className="text-blue-500 hover:underline ml-1 break-all"
                  rel="noopener noreferrer"
                >
                  {api.endpoint}
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="font-semibold">Example Request:</span> {api.example_request}
              </p>
              {api.example_response && (
                <pre className="text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-auto">
                  {JSON.stringify(api.example_response, null, 2)}
                </pre>
              )}
            </div>
          ))}

          {filteredApis.length === 0 && (
            <p className="col-span-full text-gray-500 dark:text-gray-400 text-center">
              No APIs found.
            </p>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white dark:bg-gray-900 shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          © {new Date().getFullYear()} PublicAPIs. Made by Nimash Mendis.
        </div>
      </footer>
    </div>
  );
}
