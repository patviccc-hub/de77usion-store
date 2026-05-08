'use client'

export default function DE77USIONStore() {
  const products = [
    {
      id: 1,
      name: 'Core Tee',
      price: 550,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      description: 'Heavy cotton oversized silhouette.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Void Tee',
      price: 590,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485b?q=80&w=1200&auto=format&fit=crop',
      description: 'Minimal washed black essential.',
      sizes: ['S', 'M', 'L']
    },
    {
      id: 3,
      name: 'Noir Tee',
      price: 620,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
      description: 'Luxury oversized streetwear fit.',
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 4,
      name: 'Static Tee',
      price: 560,
      image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop',
      description: 'Premium heavyweight cotton.',
      sizes: ['S', 'M', 'L']
    },
    {
      id: 5,
      name: 'Ghost Tee',
      price: 640,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
      description: 'Dark luxury first drop piece.',
      sizes: ['S', 'M', 'L', 'XL']
    }
  ]

  return (
    <div className="min-h-screen bg-[#070707] text-[#f5f1ea] overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl tracking-[0.3em] font-bold uppercase">
            DE77USION
          </div>

          <div className="hidden md:flex gap-10 uppercase tracking-[0.25em] text-xs text-white/60">
            <a href="#drop" className="hover:text-white transition">First Drop</a>
            <a href="#products" className="hover:text-white transition">Shop</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </div>

          <div className="flex gap-4 text-white/70 text-lg">
            <button className="hover:text-white transition">⌕</button>
            <button className="hover:text-white transition">♡</button>
            <button className="hover:text-white transition">👜</button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#070707]" />

        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-4xl">
          <div className="uppercase tracking-[0.5em] text-sm text-white/40 mb-6">
            DE77USION — SS25
          </div>

          <h1 className="text-6xl md:text-8xl leading-none uppercase tracking-[0.08em] font-black mb-6">
            First Drop
          </h1>

          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed mb-10 italic">
            Between illusion and reality. Minimal silhouettes crafted for modern darkness.
          </p>

          <a
            href="#products"
            className="border border-white/20 px-10 py-4 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500"
          >
            Enter Store
          </a>
        </div>
      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="uppercase tracking-[0.3em] text-xs text-white/40 mb-3">
              Collection
            </div>
            <h2 className="text-5xl uppercase tracking-[0.08em]">
              First Drop
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/30 transition duration-500"
            >
              <div className="relative overflow-hidden h-[520px] bg-[#111]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute top-5 left-5 border border-white/20 px-4 py-2 uppercase tracking-[0.25em] text-[10px] bg-black/30 backdrop-blur-sm">
                  SS25
                </div>
              </div>

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl uppercase tracking-[0.08em] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-white/40 italic text-sm max-w-[220px]">
                      {product.description}
                    </p>
                  </div>

                  <div className="text-xl tracking-[0.08em]">
                    ${product.price}
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 border border-white/15 text-sm hover:border-white hover:bg-white hover:text-black transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <button className="w-full mt-7 border border-white/15 py-4 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/10 max-w-7xl mx-auto px-6 py-32"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[0.3em] text-xs text-white/40 mb-5">
              About
            </div>

            <h2 className="text-5xl uppercase leading-tight tracking-[0.08em] mb-8">
              Crafted For
              <br />
              Modern Darkness
            </h2>

            <p className="text-white/50 leading-relaxed text-lg italic max-w-lg">
              DE77USION explores minimal silhouettes, luxury textures and cinematic aesthetics inspired by the tension between illusion and reality.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
              className="w-full h-full object-cover hover:scale-105 transition duration-1000"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-white/30 uppercase tracking-[0.25em] text-xs">
        DE77USION — First Drop — SS25
      </footer>
    </div>
  )
}
