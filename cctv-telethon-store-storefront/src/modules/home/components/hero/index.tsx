import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div 
      className="w-full relative text-center"
      style={{
        padding: '3rem 2rem',
        backgroundImage: 'radial-gradient(circle, #f3e5f5 10%, transparent 10%)',
        backgroundSize: '50px 50px',
        backgroundColor: '#fff'
      }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl leading-tight font-normal mb-4"
            style={{ 
              color: '#000',
              fontFamily: "'Courier New', Courier, monospace"
            }}
          >
            Ecommerce Starter Template
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-relaxed font-normal max-w-2xl mx-auto"
            style={{ 
              color: '#000',
              fontFamily: "'Courier New', Courier, monospace"
            }}
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button 
            variant="secondary"
            style={{
              backgroundColor: '#EA8F1C',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              fontFamily: "'Courier New', Courier, monospace"
            }}
          >
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
      
      {/* Edge-to-edge purple triangle at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '30px',
          background: '#642165',
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default Hero
