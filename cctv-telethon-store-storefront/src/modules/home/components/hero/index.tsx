"use client"

import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] })
const montserratMedium = Montserrat({ weight: "500", subsets: ["latin"] })

const Hero = () => {
  return (
    <div 
      className="w-full relative text-center"

      style={{
        backgroundImage: 'radial-gradient(circle, #f3e5f5 10%, transparent 10%)',
        backgroundSize: '50px 50px',
        backgroundColor: '#fff'
      }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <div style={{ padding: '2rem 1rem' }} className="sm:px-8 md:px-12 lg:px-16">
          <span>
            <Heading
              level="h1"
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 ${montserratMedium.className}`}
              style={{ 
                color: '#000',
                fontWeight: 500
              }}
            >
              <span className="block sm:hidden">CCTV 24-Hour Telethon</span>
              <span className="hidden sm:block">Welcome to the CCTV 24-Hour Telethon</span>
            </Heading>
            <Heading
              level="h2"
              className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-normal max-w-2xl mx-auto ${montserratMedium.className}`}
              style={{ 
                color: '#000',
                fontWeight: 500
              }}
            >
              July 25-26, 2025 • Support the CCTV Archives & Local Media Democracy
            </Heading>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-12">
          <a
            href="https://cctv.org/telethon"
            target="_blank"
            className="rounded-lg"
            style={{ 
              backgroundColor: '#20B2AA',
              boxShadow: 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83',
              display: 'inline-block',
              textDecoration: 'none',
              width: '300px',
              height: '68px',
              transition: 'all 0.1s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1C9B94';
              e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#20B2AA';
              e.currentTarget.style.boxShadow = 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = '#167772';
              e.currentTarget.style.boxShadow = 'inset -3px -3px 0px #48D1CC, inset 3px 3px 0px #178B83';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = '#1C9B94';
              e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
            }}
          >
            <Button 
              variant="secondary"
              className={montserrat.className}
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                outline: 'none',
                padding: '0',
                fontSize: '1.875rem',
                borderRadius: '4px',
                boxShadow: 'none',
                width: '100%',
                height: '100%',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Watch Live Stream
            </Button>
          </a>
          <a
            href="tel:802-862-3966"
            className="rounded-lg"
            style={{ 
              backgroundColor: '#20B2AA',
              boxShadow: 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83',
              display: 'inline-block',
              textDecoration: 'none',
              width: '300px',
              height: '68px',
              transition: 'all 0.1s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1C9B94';
              e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#20B2AA';
              e.currentTarget.style.boxShadow = 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = '#167772';
              e.currentTarget.style.boxShadow = 'inset -3px -3px 0px #48D1CC, inset 3px 3px 0px #178B83';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = '#1C9B94';
              e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
            }}
          >
            <Button 
              variant="secondary"
              className={montserrat.className}
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                outline: 'none',
                padding: '0',
                fontSize: '1.875rem',
                borderRadius: '4px',
                boxShadow: 'none',
                width: '100%',
                height: '100%',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Call to Pledge
              <Github />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Triangle positioned at bottom edge, corner to corner */}
      <div
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: 'clamp(30px, 4vw, 60px)',
          background: '#642165',
          clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default Hero
