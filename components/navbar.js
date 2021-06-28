function navbar() {
    return (
        <div className="flex justify-between bg-black p-7">
            <div>
                <span className="text-5xl py-6 text-white font-bold">ExeBank 💎</span>
            </div>
            <div>
                <button className="shadow-lg inline-block text-3x1 px-10 py-6 leading-none border rounded text-black font-bold border-white hover:border-transparent hover:text-yellow-400 hover:bg-white mt-4 lg:mt-0 bg-yellow-400">LOGIN</button>
            </div>
        </div>
    )
}

export default navbar
