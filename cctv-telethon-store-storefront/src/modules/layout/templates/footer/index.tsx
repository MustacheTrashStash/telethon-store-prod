import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer 
      className="w-full"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '2rem',
        fontFamily: "'Courier New', Courier, monospace"
      }}
    >
      <div 
        className="content-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        {/* MEDUSA STORE Section */}
        <div 
          style={{
            flex: '1',
            minWidth: '150px',
            margin: '0.5rem'
          }}
        >
          <h4 
            style={{
              marginBottom: '0.5rem',
              color: '#EA8F1C',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            MEDUSA STORE
          </h4>
          <p style={{ color: '#fff', fontSize: '0.9rem' }}>
            Built with ❤️ by rebels and coders.
          </p>
        </div>

        {/* Categories Section */}
        {productCategories && productCategories?.length > 0 && (
          <div 
            style={{
              flex: '1',
              minWidth: '150px',
              margin: '0.5rem'
            }}
          >
            <h4 
              style={{
                marginBottom: '0.5rem',
                color: '#EA8F1C',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Categories
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {productCategories?.slice(0, 4).map((c) => {
                if (c.parent_category) {
                  return null
                }
                return (
                  <li key={c.id} style={{ margin: '0.25rem 0' }}>
                    <LocalizedClientLink
                      href={`/categories/${c.handle}`}
                      style={{
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'block',
                        fontSize: '0.9rem'
                      }}
                      data-testid="category-link"
                    >
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {/* Resources Section */}
        <div 
          style={{
            flex: '1',
            minWidth: '150px',
            margin: '0.5rem'
          }}
        >
          <h4 
            style={{
              marginBottom: '0.5rem',
              color: '#EA8F1C',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Resources
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '0.25rem 0' }}>
              <a
                href="https://github.com/medusajs"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'block',
                  fontSize: '0.9rem'
                }}
              >
                GitHub
              </a>
            </li>
            <li style={{ margin: '0.25rem 0' }}>
              <a
                href="https://docs.medusajs.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'block',
                  fontSize: '0.9rem'
                }}
              >
                Documentation
              </a>
            </li>
            <li style={{ margin: '0.25rem 0' }}>
              <a
                href="https://github.com/medusajs/nextjs-starter-medusa"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'block',
                  fontSize: '0.9rem'
                }}
              >
                Source code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
