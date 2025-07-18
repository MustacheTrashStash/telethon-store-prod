"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useState } from "react"
import { Montserrat } from "next/font/google"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                  onClick={toggleMenu}
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={isOpen}
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-250"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-auto z-30 left-0 top-16 text-sm text-ui-fg-on-color">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-auto rounded-rounded p-6 pl-0"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className="flex flex-col gap-6 items-center text-center pt-0">
                      {Object.entries(SideMenuItems).map(([name, href], index) => {
                        return (
                          <div key={name} className="w-full max-w-sm">
                            <LocalizedClientLink
                              href={href}
                              className="block text-3xl font-normal text-white py-6 pl-0 rounded-r-lg transition-all duration-150 hover:brightness-90 active:brightness-75"
                              style={{ 
                                backgroundColor: '#20B2AA',
                                boxShadow: 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83',
                                marginLeft: '-100px',
                                paddingLeft: '150px',
                                paddingRight: '20px',
                                textAlign: 'center'
                              }}
                              onClick={() => setIsOpen(false)}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
