import { Metadata } from "next"
import { Montserrat } from "next/font/google"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import DonateButton from "@modules/home/components/donate-button"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })
const montserratLight = Montserrat({ weight: "300", subsets: ["latin"] })

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
        className="text-center text-white px-4 sm:px-8 md:px-12 lg:px-16"
        style={{
          backgroundColor: '#642165',
          padding: '1.5rem 1rem',
          fontFamily: "'Courier New', Courier, monospace"
        }}
      >
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-normal mb-4 ${montserrat.className}`}
          style={{ 
            marginBottom: '1rem',
            fontWeight: 400
          }}
        >
          Join the CCTV Telethon Experience
        </h2>
        <p 
          className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8 ${montserratLight.className}`}
          style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            maxWidth: '800px',
            margin: '0 auto 2rem auto',
            fontWeight: 300
          }}
        >
          Experience live auctions, local musical acts, creative performances, and community talk shows. Saturday's programming collaborates with the Old North End Ramble event. Join our live studio audience at our accessible Burlington studios on 294 North Winooski Avenue.
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
        className="w-full border-b border-ui-border-base relative text-center pt-12"
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
            left: '0',
            right: '0',
            width: '100vw',
            height: 'clamp(30px, 4vw, 60px)',
            background: '#642165',
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto gap-4" style={{ paddingTop: 'clamp(40px, 5vw, 80px)' }}>
          {/* Left content area */}
          <div className="flex-1 text-left sm:pr-8">
            <h3 
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${montserrat.className}`}
              style={{ 
                fontWeight: 400
              }}
            >
              Preserving Local History Together
            </h3>
            <p 
              className="text-lg"
              style={{ 
                fontFamily: "'Courier New', Courier, monospace"
              }}
            >
              This event will support the continued preservation of the CCTV Archives, a collection of over 40,000 programs showcasing local history dating back to 1984. Housed on over 11,000 VHS tapes and DVDs, these recordings document the meetings, protests, celebrations, and conversations that have shaped our communities for decades. In the wake of a terminated federal National Endowment for the Humanities grant, the preservation of these tapes is at risk due to lack of funds. All proceeds raised from the telethon fundraiser will directly benefit the CCTV Archives.
            </p>
          </div>
          
          {/* Right button area */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <DonateButton />
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
