"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Detail = () => {
    const containerRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const dotRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(headingRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(dotRef.current, {
                scale: 0,
                duration: 2,
                delay: 0.5,
                ease: "elastic.out(1, 0.3)"
            }, "-=0.5")
            .from(textRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=1")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative w-full min-h-[60vh] md:min-h-screen bg-[#FF5A5A] flex flex-col items-center justify-between py-20 overflow-hidden">

            {/* Top Heading */}
            <div className="w-full text-center px-4">
                <h2 ref={headingRef} className="text-white text-[11vw] font-extrabold uppercase font-[family-name:var(--font-syne)] leading-none tracking-tighter">
                    GREAT DETAILING
                </h2>
            </div>

            {/* Center Dot */}
            <div ref={dotRef} className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full shadow-lg"></div>

            {/* Bottom Text */}
            <div className="w-full text-center px-4 mx-auto">
                <p ref={textRef} className="text-white text-lg md:text-2xl 2xl:text-5xl font-[family-name:var(--font-playfair)] tracking-wide">
                    We care about every small details that many ignore
                </p>
            </div>

        </section>
    )
}

export default Detail
