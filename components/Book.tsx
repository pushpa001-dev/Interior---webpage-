"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Book = () => {
    const containerRef = useRef<HTMLElement>(null)
    const stripeRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const textContainerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(stripeRef.current, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1,
            ease: "power3.out"
        })
            .from(imageRef.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(textContainerRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.5")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full min-h-[80vh] bg-black border-y border-neutral-700 overflow-hidden flex flex-col md:flex-row items-center justify-between">

            {/* Red Vertical Stripe Background */}
            <div ref={stripeRef} className="absolute top-0 bottom-0 left-[10%] w-[15%] md:w-[12%] bg-[#FF5A5A] z-0 hidden md:block"></div>

            {/* Mobile Red Stripe */}
            <div className="absolute top-0 left-0 right-0 h-[100px] bg-[#FF5A5A] z-0 md:hidden"></div>

            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 lg:p-20 z-10 gap-10 md:gap-0">

                {/* Left Side: Images */}
                <div className="relative w-full md:w-1/2 flex justify-start items-center">
                    <div ref={imageRef} className="relative w-full max-w-[400px] md:max-w-[500px] 2xl:max-w-[900px] aspect-square md:aspect-[4/3] transform md:translate-x-10">
                        <Image
                            src="/book.png"
                            alt="Unique wooden armchair"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Side: Text */}
                <div ref={textContainerRef} className="w-full md:w-1/2 flex flex-col items-end text-right space-y-6 md:space-y-10">
                    {/* Heading */}
                    <h2 className="text-white text-5xl md:text-7xl lg:text-[7rem] font-extrabold uppercase font-[family-name:var(--font-syne)] leading-none tracking-tight">
                        FURNITURE
                    </h2>

                    {/* Description */}
                    <p className="text-white/90 text-sm md:text-xl font-[family-name:var(--font-playfair)] max-w-[350px] leading-relaxed">
                        we use very unique furniture that differs you from many of other interiors you ever see.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <button className="bg-[#FF5A5A] text-white px-10 py-3 md:px-14 md:py-4 font-bold uppercase tracking-widest font-[family-name:var(--font-syne)] hover:bg-[#e04e4e] transition-colors">
                            BOOK
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Book
