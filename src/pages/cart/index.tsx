export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="text-center font-semibold font-RobotoCondensed text-5xl my-5">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                <img src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao2.png" alt="" className="w-32" />
                <strong>
                    R$ 450.00
                </strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2.5 font-medium rounded text-white">
                        -
                    </button>
                    1
                    <button className="bg-slate-600 px-2.5 font-medium  rounded text-white">
                        +
                    </button>
                </div>
                <strong>
                    Total: R$ 450.00
                </strong>

            </section>
        </div>
    )
}