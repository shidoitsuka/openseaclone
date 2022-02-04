export default function Footer() {
  return (
    <div className="bottom-0 bg-secondary text-white px-44 pt-20 pb-5">
      <div>
        <div className="grid grid-cols-2 border-b border-gray-400 pb-10">
          <div className="px-20">
            <h1 className="font-bold text-2xl">Stay in the loop</h1>
            <h3 className="font-light mt-3">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Allele Group.</h3>
            <div className="flex mt-5">
              <input type="text" className="px-5 py-2 rounded-lg mr-5" placeholder="Your email address" />
              <button className="bg-primary rounded-lg font-bold px-5 py-2">Sign Up</button>
            </div>
          </div>
          <div className="px-20">
            <h1 className="font-bold text-2xl">Join the community</h1>
            <div className="flex mt-3">
              <div>Logo</div>
              <div>Logo</div>
              <div>Logo</div>
              <div>Logo</div>
              <div>Logo</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-10 px-20 border-b border-gray-400 pb-10">
          <div>
            <div className="font-bold">Logo</div>
            <h1 className="font-semibold text-xl mt-5">OpeanSea</h1>
            <p className="font-light pr-20 mt-3">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
          </div>
          <div className="col-span-2 flex justify-between">
            <div className="space-y-3">
              <div className="font-bold mb-5">Marketplace</div>
              <div className="font-normal text-sm">All NFTs</div>
              <div className="font-normal text-sm">Art</div>
              <div className="font-normal text-sm">Collectibles</div>
              <div className="font-normal text-sm">Domain Names</div>
              <div className="font-normal text-sm">Music</div>
              <div className="font-normal text-sm">Photography</div>
              <div className="font-normal text-sm">Sports</div>
              <div className="font-normal text-sm">Trading Cards</div>
              <div className="font-normal text-sm">Utility</div>
              <div className="font-normal text-sm">Virtual Worlds</div>
            </div>
            <div className="space-y-3">
              <div className="font-bold mb-5">My Account</div>
              <div className="font-normal text-sm">Profile</div>
              <div className="font-normal text-sm">Favorites</div>
              <div className="font-normal text-sm">Watchlist</div>
              <div className="font-normal text-sm">My Collections</div>
              <div className="font-normal text-sm">Settings</div>
              <div className="font-bold my-10">Stats</div>
              <div className="font-normal text-sm">Rankings</div>
              <div className="font-normal text-sm">Activity</div>
            </div>
            <div className="space-y-3">
              <div className="font-bold">Resources</div>
              <div className="font-normal text-sm">Help Center</div>
              <div className="font-normal text-sm">Platform Status</div>
              <div className="font-normal text-sm">Partners</div>
              <div className="font-normal text-sm">Gas-Fee Marketplace</div>
              <div className="font-normal text-sm">Blog</div>
              <div className="font-normal text-sm">Docs</div>
              <div className="font-normal text-sm">Newsletter</div>
            </div>
            <div className="space-y-3">
              <div className="font-bold">Company</div>
              <div className="font-normal text-sm">About</div>
              <div className="font-normal text-sm">Careers</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="text-xs font-light">
            © 2022 Ozone Networks, Inc
          </div>
          <div className="text-xs font-light flex space-x-3">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>

      </div>
    </div>
  )
}