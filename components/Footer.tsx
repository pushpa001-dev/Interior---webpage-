"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-black border-t overflow-hidden border-neutral-800 text-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase font-[family-name:var(--font-syne)] text-[#FF5A5A]">
                        UNIK
                    </h2>
                    <p className="text-sm md:text-base font-[family-name:var(--font-playfair)] text-neutral-400 max-w-xs">
                        Creating spaces that blend vintage charm with modern elegance.
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-wider">
                        Explore
                    </h3>
                    <nav className="flex flex-col space-y-2 font-[family-name:var(--font-playfair)] text-neutral-300">
                        <Link href="#" className="hover:text-[#FF5A5A] transition-colors">Home</Link>
                        <Link href="#" className="hover:text-[#FF5A5A] transition-colors">Furniture</Link>
                        <Link href="#" className="hover:text-[#FF5A5A] transition-colors">About Us</Link>
                        <Link href="#" className="hover:text-[#FF5A5A] transition-colors">Work</Link>
                    </nav>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-wider">
                        Contact
                    </h3>
                    <div className="flex flex-col space-y-2 font-[family-name:var(--font-playfair)] text-neutral-300">
                        <p>123 Interior Blvd, Design City</p>
                        <p>+1 (555) 123-4567</p>
                        <p>contact@unikinteriors.com</p>
                    </div>
                </div>

                {/* Social / Newsletter (Optional) */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-wider">
                        Stay Updated
                    </h3>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="bg-neutral-900 border border-neutral-700 px-4 py-2 font-[family-name:var(--font-playfair)] focus:outline-none focus:border-[#FF5A5A]"
                        />
                        <button className="bg-[#FF5A5A] px-4 py-2 font-bold font-[family-name:var(--font-syne)] hover:bg-[#e04e4e] transition-colors">
                            GO
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-[family-name:var(--font-playfair)]">
                <p>&copy; {new Date().getFullYear()} UNIK Interiors. All rights reserved.</p>
                <p>Designed with passion.</p>
            </div>
        </footer>
    )
}

export default Footer
