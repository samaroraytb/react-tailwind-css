import Typed from 'react-typed'

function Banner(params){
    return(
        <div className="bg-[#2699fb] w-full py-[100px] " >
            <div className="max-w-[1200px] mx-auto text-center font-bold p-[20px]">
                <h2 className="text-xl md:text-2xl mt-4">Learn with us</h2>
                <h2 className="text-4xl md:text-6xl text-white mt-4">Grow with us</h2>
                <div className="text-[20px] md:text-[30px] text-white mt-4">
                    Learn
                    <Typed
                    className='pl-2'
                    strings={['Web Development', "Native Development", "Graphic Design"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}/>
                </div>
            </div>
        </div>
    )
}

export default Banner