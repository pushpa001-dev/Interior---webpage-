'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            // Cleanup if necessary, though usually Lenis is global for the app session
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll
