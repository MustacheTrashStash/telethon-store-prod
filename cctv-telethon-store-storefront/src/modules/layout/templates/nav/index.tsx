import { Suspense } from "react"
import { Montserrat } from "next/font/google"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

const montserrat = Montserrat({ weight: "800", subsets: ["latin"] })

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200" style={{ 
        backgroundColor: '#EA8F1C',
        boxShadow: 'inset 0 -3px 0px #B8730E'
      }}>
        <nav className={`text-lg text-white flex items-center justify-between w-full h-full px-4 ${montserrat.className}`}>
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="hover:opacity-80 transition-opacity"
              data-testid="nav-store-link"
            >
              <img 
                src="/CCTV telethon Logo.png" 
                alt="CCTV Telethon Store" 
                style={{
                  height: '90px',
                  width: 'auto',
                  position: 'relative',
                  top: '15px',
                  zIndex: 60
                }}
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
