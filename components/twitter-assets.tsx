import Image from "next/image"

export default function TwitterAssets() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Invictus AI Twitter Assets</h1>

      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Twitter Profile Logo</h2>
          <p className="text-gray-400 mb-4">
            This logo is optimized for your Twitter profile picture. It features a clean, minimalist design that works
            well at small sizes.
          </p>
          <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-500 mb-4">
              <Image
                src="/images/invictus-twitter-logo.png"
                alt="Invictus AI Twitter Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="/images/invictus-twitter-logo.png"
              download
              className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Download Logo
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Twitter Header</h2>
          <p className="text-gray-400 mb-4">
            This header image is designed to the recommended Twitter dimensions (1500×500 pixels) and showcases your
            brand's futuristic AI and blockchain focus.
          </p>
          <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border-2 border-green-500">
              <Image
                src="/images/invictus-twitter-header.png"
                alt="Invictus AI Twitter Header"
                width={1500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <a
              href="/images/invictus-twitter-header.png"
              download
              className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Download Header
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Usage Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            For the profile picture, Twitter will crop it to a circle, so the design is already optimized for this
          </li>
          <li>The header image is designed to the recommended dimensions of 1500×500 pixels</li>
          <li>Keep important elements in the center of the header as Twitter may crop the edges on mobile devices</li>
          <li>Both images match your website's color scheme and branding for consistency</li>
        </ul>
      </div>
    </div>
  )
}
