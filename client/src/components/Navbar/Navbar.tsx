import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white shadow-md flex justify-between items-center">
      <div className="m-8">
        <img src={logo} alt="" width={140} className='' />
      </div>
      <div className="flex gap-8 text-lg ">
        <p>Jobs</p>
        <p>Interships</p>
      </div>
      <div className="border-2 border-gray-300 rounded-xl mr-8 p-1">
        <input type="text" placeholder='search' />
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-8">Sign In</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-8">Sign In</button>

      </div>
    </div>
  )
}

export default Navbar