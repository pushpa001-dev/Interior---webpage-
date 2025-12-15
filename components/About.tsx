"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const About = () => {
    const containerRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    const centerImageRef = useRef<HTMLDivElement>(null)
    const rightColumnRef = useRef<HTMLDivElement>(null)
    const textContentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(headingRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(centerImageRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.8")
            .from(rightColumnRef.current?.children || [], {
                x: 50,
                opacity: 0,
                stagger: 0.3,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .from(textContentRef.current?.children || [], {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8
            }, "-=0.5")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col md:grid md:grid-cols-[1fr_1.4fr_0.8fr]">

            {/* LEFT COLUMN: Text Content */}
            <div className="relative flex flex-col justify-between p-6 md:p-10 lg:p-14 order-2 md:order-1 h-[50vh] md:h-auto">

                {/* Overlapping Heading */}
                <div ref={headingRef} className="absolute top-[10%] left-6 md:left-10 z-20 pointer-events-none whitespace-nowrap">
                    <h1 className="text-white text-[15vw] md:text-[11vw] font-extrabold uppercase font-[family-name:var(--font-syne)] leading-none tracking-tighter mix-blend-exclusion">
                        ABOUT
                    </h1>
                </div>

                {/* Spacer for bottom content alignment */}
                <div className="hidden md:block"></div>

                {/* Bottom Text & Button */}
                <div ref={textContentRef} className="relative z-10 mt-auto space-y-8">
                    <p className="text-white text-lg md:text-2xl font-[family-name:var(--font-playfair)] max-w-[300px] leading-snug">
                        we cost wyou veery less that any others in the market so you can trust us in anyone.
                    </p>

                    <button className="bg-[#FF5A5A] text-white px-8 py-3 md:px-12 md:py-4 font-bold uppercase tracking-widest font-[family-name:var(--font-syne)] hover:bg-[#e04e4e] transition-colors w-full md:w-auto">
                        BOOK
                    </button>
                </div>
            </div>

            {/* CENTER COLUMN: Main Image (Hanging Chair) */}
            <div ref={centerImageRef} className="relative h-[50vh] md:h-auto w-full order-1 md:order-2 bg-neutral-900">
                <Image
                    src="/about-1.jpeg"
                    alt="Bohemian hanging chair in a bright room"
                    fill
                    className="object-cover"
                />
            </div>

            {/* RIGHT COLUMN: Stacked Images */}
            <div ref={rightColumnRef} className="hidden md:flex flex-col h-full order-3">
                {/* Top Image (Kitchen/Fridge) */}
                <div className="relative w-full h-1/2 bg-neutral-800 p-8 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <Image
                            src="/about-2.jpeg"
                            alt="Modern kitchen with grey cabinets"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Image (Bedroom) */}
                <div className="relative w-full h-1/2 bg-neutral-900 p-8 flex items-center justify-center">
                    <div className="relative w-full h-[80%]">
                        <Image
                            src="/aboput-3.jpeg"
                            alt="Minimalist bedroom with wooden bed frame"
                            fill
                            className="object-cover rounded-sm shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Right Column equivalent (if needed, but usually hidden or stacked differently) */}
            {/* For mobile, we might want to show these images below, but the design image mainly shows the desktop layout. 
          I'll add them stacked below for mobile to ensure content isn't lost. 
      */}
            <div className="md:hidden flex flex-col order-3">
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/about-2.jpeg"
                        alt="Modern kitchen"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full h-[40vh]">
                    <Image
                        src="/aboput-3.jpeg"
                        alt="Bedroom"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

        </section>
    )
}

export default About
