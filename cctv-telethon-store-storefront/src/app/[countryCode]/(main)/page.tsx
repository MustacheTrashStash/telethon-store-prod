import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div 
        className="text-center text-white"
        style={{
          backgroundColor: '#642165',
          padding: '2rem',
          fontFamily: "'Courier New', Courier, monospace"
        }}
      >
        <h2 
          className="text-3xl font-normal mb-4"
          style={{ marginBottom: '1rem' }}
        >
          Support Independent Commerce
        </h2>
        <p 
          className="text-lg max-w-4xl mx-auto mb-8"
          style={{ 
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 2rem auto'
          }}
        >
          Help us build the decentralized store of tomorrow. Your donations go directly toward development and open-source infrastructure.
        </p>
        
        {/* Guests in Zigzag Formation */}
        <div className="max-w-6xl mx-auto">
          {/* Musical Performances */}
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            Musical Performances
          </h3>
          
          {/* Row 1 - Left */}
          <div className="flex justify-start mb-4">
            <div className="text-left">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Death to Intelligent Dance Music
              </p>
            </div>
          </div>
          
          {/* Row 2 - Right */}
          <div className="flex justify-end mb-4">
            <div className="text-right">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Avery Lavoie
              </p>
            </div>
          </div>
          
          {/* Row 3 - Left */}
          <div className="flex justify-start mb-4">
            <div className="text-left">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Infinite Culcleasure
              </p>
            </div>
          </div>
          
          {/* Row 4 - Right */}
          <div className="flex justify-end mb-8">
            <div className="text-right">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                P. Alimony & Friends
              </p>
            </div>
          </div>
          
          {/* Talk Shows */}
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            Talk Shows
          </h3>
          
          {/* Row 1 - Left */}
          <div className="flex justify-start mb-4">
            <div className="text-left">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Gary Decarolis
              </p>
              <p className="text-sm" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Celebrate Life
              </p>
            </div>
          </div>
          
          {/* Row 2 - Right */}
          <div className="flex justify-end mb-4">
            <div className="text-right">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Dr Louis Meyers
              </p>
              <p className="text-sm" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Meet the Author
              </p>
            </div>
          </div>
          
          {/* Row 3 - Left */}
          <div className="flex justify-start mb-4">
            <div className="text-left">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Mark Hughes
              </p>
              <p className="text-sm" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                The Juxtaposition
              </p>
            </div>
          </div>
          
          {/* Row 4 - Right */}
          <div className="flex justify-end mb-4">
            <div className="text-right">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Lydia Diamond
              </p>
              <p className="text-sm" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Tea Talks
              </p>
            </div>
          </div>
          
          {/* Row 5 - Left */}
          <div className="flex justify-start mb-8">
            <div className="text-left">
              <p className="font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Bruce Wilson
              </p>
              <p className="text-sm" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                Arts So Wonderful
              </p>
            </div>
          </div>
          
          {/* And Much More */}
          <div className="text-center mb-4">
            <p className="text-lg font-bold" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              And Much More!
            </p>
            <p className="text-sm mt-2" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              See the full performance schedule at cctv.org/telethon
            </p>
          </div>
        </div>
      </div>
      <div 
        className="w-full border-b border-ui-border-base relative text-center"
        style={{
          padding: '2rem',
          backgroundColor: '#fff',
          backgroundImage: 'radial-gradient(circle, transparent 20%, #fff 20%, #fff 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #fff 20%, #fff 80%, transparent 80%, transparent), linear-gradient(#f3e5f5 2px, transparent 2px), linear-gradient(90deg, #f3e5f5 2px, #fff 2px)',
          backgroundPosition: '0 0, 25px 25px, 0 -1px, -1px 0',
          backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px',
          fontFamily: "'Courier New', Courier, monospace"
        }}
      >
        {/* Mirrored purple triangle at top */}
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '30px',
            background: '#642165',
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto gap-4">
          {/* Left content area */}
          <div className="flex-1 text-left sm:pr-8">
            <h3 
              className="text-2xl font-bold mb-2"
              style={{ 
                fontFamily: "'Courier New', Courier, monospace"
              }}
            >
              Join the CCTV Telethon Live!
            </h3>
            <p 
              className="text-lg"
              style={{ 
                fontFamily: "'Courier New', Courier, monospace"
              }}
            >
              Watch live coverage, participate in exclusive auctions, and support independent media. Don't miss this historic broadcasting event!
            </p>
          </div>
          
          {/* Right button area */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              className="w-full sm:w-auto"
              style={{
                backgroundColor: '#EA8F1C',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderRadius: '4px',
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: 'bold'
              }}
            >
              Link to the Telethon
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
