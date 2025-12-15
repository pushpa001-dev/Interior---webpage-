"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Work = () => {
    const containerRef = useRef<HTMLElement>(null)
    const leftColRef = useRef<HTMLDivElement>(null)
    const rightColRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(leftColRef.current?.children || [], {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(rightColRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.6")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full h-full min-h-screen bg-black overflow-hidden p-10 flex items-center justify-between flex-col md:flex-row">

            {/* Left Column: Text Content */}
            <div ref={leftColRef} className="w-full h-full p-8 md:p-14 lg:p-20 flex flex-col items-start justify-between order-2 md:order-1">

                {/* Top Content */}
                <div className="space-y-4 h-full">
                    <h2 className="text-white text-[15vw] md:text-[8vw] 2xl:text-[10vw] font-extrabold uppercase font-[family-name:var(--font-syne)] leading-none tracking-tighter">
                        WORK
                    </h2>
                    <p className="text-white text-xl md:text-3xl 2xl:text-5xl font-[family-name:var(--font-playfair)] leading-snug ">
                        our workers are friendly and cooperative
                    </p>
                </div>

                {/* Bottom List */}
                <div className="mt-10 md:mt-0 h-full">
                    <ul className="text-white text-lg md:text-2xl font-[family-name:var(--font-playfair)] space-y-3">
                        <li className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Timings : 9:00 to 5:00</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Day : monday to friday</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Right Column: Image */}
            <div ref={rightColRef} className="relative w-full flex items-end justify-end md:w-1/2 h-full p-8 md:p-14 lg:p-20 md:h-screen order-1 md:order-2">
                <Image
                    src="/work.jpeg"
                    alt="Professional painter painting a wall"
                    fill
                    className="object-cover"
                />
            </div>

        </section>
    )
}

export default Work
