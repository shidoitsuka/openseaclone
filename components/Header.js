export default function Header() {
  return (
    <div className="fixed flex justify-between w-full px-10 py-3 shadow-lg bg-white">
      <div>
        <div className="font-bold text-3xl">OpenSea</div>
      </div>
      <div className="ml-auto mr-5">
        <input className="border-2 border-grey-100 px-5 h-full rounded-md" placeholder="tes" style={{ width: "30vw" }} />
      </div>
      <div className="flex mr-auto my-auto">
        <div className="font-semibold text-gray-600 mr-4">Explore</div>
        <div className="font-semibold text-gray-600 mr-4">Stats</div>
        <div className="font-semibold text-gray-600 mr-4">Resources</div>
        <div className="font-semibold text-gray-600">Create</div>
      </div>
    </div>
  )
}