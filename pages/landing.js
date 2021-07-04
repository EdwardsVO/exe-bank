function landing() {
    return (
        <div>
            <div className="py-32 pb-28  bg-gradient-to-r from-gray-600 to-black" >
                <div className="flex items-center bg-cover align-middle justify-center p-10">
                    <span className="text-9xl font-bold text-yellow-400">Tu Banco de <span className="text-white animate-pulse">Confianza</span></span>
                    <div className="hover:animate-ping">
                        <img src="pngwing.com.png"></img>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 flex flex-col items-center align-middle justify-center m-12">
                <span className="mt-7 text-black text-8xl font-bold">Mas de <span className="text-yellow-400 font-extrabold hover:text-yellow-500">324.565</span> Usuarios Registrados</span>
                <span className="mt-7 text-left text-black text-8xl font-bold"><span className="text-yellow-400 font-extrabold hover:text-yellow-500">128.134</span> Transacciones por Día</span>
                <span className="mt-7 text-left text-black text-8xl font-bold"><span className="text-yellow-400 font-extrabold hover:text-yellow-500">5</span> Sedes a Nivel Mundial</span>
            </div>
            <div className="flex flex-row mt-20 bg-yellow-400 p-32 items-center align-middle justify-center">
                <div className="  bg-yellow-400 ">
                    <a href="/menu" className="shadow-md text-5xl py-10 px-32 leading-none border rounded text-black font-bold border-black hover:border-transparent hover:text-white hover:text-teal-500 hover:bg-black duration-75">
                        Entrar</a>
                </div>
                <div className="w-max flex flex-col bg-yellow-400 ">
                    <p className="text-7xl font-semibold pl-40"> QUE ESTÁS ESPERANDO !</p>
                    <p className="text-8xl font-bold pl-40 animate-bounce">Empieza ahora</p>
                </div>
            </div>
        </div>
    )
}

export default landing
