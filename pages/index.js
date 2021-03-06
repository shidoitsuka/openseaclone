import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Allele Group</title>
        <meta name="description" content="World's largest NFT marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className={styles.container}>
          <div className="px-10 md:px-44 md:flex items-center">

            <div className="">
              <div className="font-semibold text-4xl md:text-5xl md:pr-20">Discover, collect, and sell extraordinary NFTs</div>
              <div className="mt-1 w-full md:w-1/2">Allele Group is the world&apos;s first and largest NFT marketplace</div>
              <div className="mt-5">
                <button className="bg-primary text-white font-bold rounded-lg px-10 py-2 mr-5">Explore</button>
                <button className="bg-transparent text-primary font-bold border-2 border-primary rounded-lg px-10 py-2">Create</button>
              </div>
              <div className="my-5 md:mt-10 md:mb-0">
                <p className="font-bold text-primary">Learn more about Allele Group</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg">
              <figure className="p-0">
                <div>
                  <img src="https://picsum.photos/900/500" className="rounded-t-lg" alt="illustration" />
                </div>
                <div className="flex py-2">
                  <img src="https://picsum.photos/30/30" className="rounded-full mx-3" alt="illustration" />
                  <div>
                    <p className="text-xs font-bold">Future Proof Visions #108</p>
                    <p className="text-xs text-primary font-semibold">WylieStyles</p>
                  </div>
                  <p className="ml-auto mr-3 my-auto">i</p>
                </div>
              </figure>
            </div>
          </div>

          <div className="text-center mt-44 px-10 md:px-44">
            <h1 className="font-semibold text-3xl">Notable Drops</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-20">
              <div className="bg-[#0D2448] rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/350" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-3 mt-5 text-white">
                    <h1 className="font-bold text-xl">WWF x Yam & TedsLittleDream</h1>
                    <h5 className="font-light mt-2">WWF&apos;s genesis drop: best offers accepted after 5pm EST, Feb 7</h5>
                    <button className="rounded-lg border-2 border-bg-gray-100 px-2 my-5">Live</button>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-[#86A4BE] rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/350" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-3 mt-5 text-white">
                    <h1 className="font-bold text-xl">Screens</h1>
                    <h5 className="font-light mt-2">Thomas Lin x Art Blocks Curated</h5>
                    <button className="rounded-lg border-2 border-bg-gray-100 px-2 my-5">Live</button>
                  </div>

                </figure>
              </div>
              <div className="bg-[#070504] rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/350" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-3 mt-5 text-white">
                    <h1 className="font-bold text-xl">THE OVERSEERS</h1>
                    <h5 className="font-light mt-2">A depiction of beauty and strength</h5>
                    <button className="rounded-lg border-2 border-bg-gray-100 px-2 my-5">Live</button>
                  </div>

                </figure>
              </div>
            </div>
          </div>

          <div className="text-center mt-44 md:px-44">
            <h1 className="font-semibold text-3xl">Top collections over <span className="text-primary">last 7 days</span></h1>
            <div className="grid grid-cols-1 mt-20 md:grid-cols-3 md:gap-5">
              <div className="mx-auto">
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">1</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">2</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">3</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">4</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">5</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
              </div>
              
              <div className="mx-auto">
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">6</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">7</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">8</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">9</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">10</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
              </div>
              
              <div className="mx-auto">
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">11</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">12</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5 ">
                  <div className="font-semibold text-xl mr-3 my-auto">13</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">14</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
                <figure className="flex mb-5">
                  <div className="font-semibold text-xl mr-3 my-auto">15</div>
                  <img src="https://picsum.photos/100/100" className="rounded-full w-10 h-10 border-2 mr-2 my-auto" />
                  <div>
                    <p className="font-semibold text-left">CLONE X - X TAKANASHI</p>
                    <p className="text-xs text-left text-gray-400">Floor price: <span className="font-bold">15.5 ETH</span></p>
                  </div>
                  <div className="ml-5">
                    <p className="text-right text-green-500">+146.72%</p>
                    <p className="text-xs text-right text-gray-400 font-bold">31,815.82</p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-44 px-10 md:px-44">
            <h1 className="font-semibold text-3xl">Trending in <span className="text-primary">all categories</span></h1>
            <div className="grid md:grid-cols-3 gap-5 mt-20">
              <div className="bg-white rounded-lg border">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/150" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="">
                    <img src="https://picsum.photos/300/150" className="rounded-full w-12 h-12 mx-auto -mt-5" alt="illustration" />
                  </div>
                  <div className="px-10 mt-2">
                    <h1 className="font-semibold text-xl">Karafuru V2</h1>
                    <h5 className="font-semibold text-gray-500 text-sm">by <span className="text-primary">KarafuruDeployer</span></h5>
                    <p className="text-gray-500 my-5">
                      Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter
                    </p>
                  </div>
                </figure>
              </div>
              <div className="bg-white rounded-lg border">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/150" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="">
                    <img src="https://picsum.photos/300/150" className="rounded-full w-12 h-12 mx-auto -mt-5" alt="illustration" />
                  </div>
                  <div className="px-10 mt-2">
                    <h1 className="font-semibold text-xl">Karafuru V2</h1>
                    <h5 className="font-semibold text-gray-500 text-sm">by <span className="text-primary">KarafuruDeployer</span></h5>
                    <p className="text-gray-500 my-5">
                      Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter
                    </p>
                  </div>
                </figure>
              </div>
              <div className="bg-white rounded-lg border">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/150" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="">
                    <img src="https://picsum.photos/300/150" className="rounded-full w-12 h-12 mx-auto -mt-5" alt="illustration" />
                  </div>
                  <div className="px-10 mt-2">
                    <h1 className="font-semibold text-xl">Karafuru V2</h1>
                    <h5 className="font-semibold text-gray-500 text-sm">by <span className="text-primary">KarafuruDeployer</span></h5>
                    <p className="text-gray-500 my-5">
                      Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter
                    </p>
                  </div>
                </figure>
              </div>

            </div>
          </div>

          <div className="text-center mt-44 px-10 md:px-44">
            <h1 className="font-semibold text-3xl">Create and sell your NFTs</h1>
            <div className="grid grid-cols-2 gap-5 mt-20 md:grid-cols-4">
              <div className="px-3">
                <div className="font-bold">Icon</div>
                <div className="font-bold">Setup your wallet</div>
                <div className="font-normal text-gray-500 mt-3">Once you???ve set up your wallet of choice, connect it to Allele Group by clicking the wallet icon in the top right corner. Learn about the <span className="text-primary font-semibold">wallets we support</span>.</div>
              </div>
              <div className="px-3">
                <div className="font-bold">Icon</div>
                <div className="font-bold">Create your collection</div>
                <div className="font-normal text-gray-500 mt-3">Click <span className="text-primary font-semibold">My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</div>
              </div>
              <div className="px-3">
                <div className="font-bold">Icon</div>
                <div className="font-bold">Add your NFTs</div>
                <div className="font-normal text-gray-500 mt-3">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</div>
              </div>
              <div className="px-3">
                <div className="font-bold">Icon</div>
                <div className="font-bold">List them for sale</div>
                <div className="font-normal text-gray-500 mt-3">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</div>
              </div>
            </div>
          </div>

          <div className="mt-44 px-10 md:px-44">
            <h1 className="font-semibold text-3xl text-center">Resources for getting started</h1>
            <div className="grid gap-5 mt-20 md:grid-cols-3">
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Important updates for listing and delisting your NFTs</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">10 tips for avoiding scams and staying safe on the decentralized</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/300/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Keeping yourself safe when buying NFTs on Allele Group</h1>
                  </div>
                  
                </figure>
              </div>
            </div>
          </div>

          <div className="text-center mt-44 px-10 md:px-44">
            <h1 className="font-semibold text-3xl">Browse by category</h1>
            <div className="grid grid-cols-2 gap-5 mt-20 md:grid-cols-3">

              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/309/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Art</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/308/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Collectibles</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/307/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Domain Names</h1>
                  </div>
                  
                </figure>
              </div>
              
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/306/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Music</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/305/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Photography</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/304/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Sports</h1>
                  </div>
                  
                </figure>
              </div>

              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/303/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Trading Cards</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/302/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Utility</h1>
                  </div>
                  
                </figure>
              </div>
              <div className="bg-white border rounded-lg">
                <figure className="p-0">
                  <div>
                    <img src="https://picsum.photos/301/200" className="rounded-t-lg w-full" alt="illustration" />
                  </div>
                  <div className="px-5 my-5">
                    <h1 className="font-semibold text-xl">Virtual Worlds</h1>
                  </div>
                  
                </figure>
              </div>

            </div>
          </div>

          <div className="text-center mt-48 px-10 md:px-44">
            <h1 className="font-semibold text-4xl">Meet Allele Group</h1>
            <p className="font-light text-gray-500 text-xl mt-10">The NFT marketplace with everything for everyone</p>
            <div className="mt-24 flex justify-center flex-col items-center">
              <iframe style={{ width: "75vw", height: "50vh" }} src="https://www.youtube.com/embed/2xpqDqGy-8c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              <p className="font-semibold text-sm text-gray-500 mt-5">Fiat on-ramp and profile customization is coming soon.</p>
            </div>
            <button className="font-bold bg-primary text-white px-8 py-4 rounded-lg mt-12">Explore the marketplace</button>
          </div>

          <div className="bg-primary w-full flex justify-between mt-24 py-10 px-7">
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
            <div className="font-bold text-white">Logo</div>
          </div>

        </div>

        <Footer />

      </main>
    </div>
  )
}
