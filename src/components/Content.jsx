
function Content() {
  return (
    <div className="md:flex md:justify-around font-mono md:pb-8">
        <div className="md:flex flex-col mt-12 md:mt-24 md:ml-5 text-center m-8  md:w-3/6">
           <b className="md:text-5xl">Welcome to the best Steak House in the New York</b>
           <p className="mt-4 md:mt-12 md:text-lg">Steak House recaptures the flavor of the open campfire. Steaks, chicken and seafood, chargrilled to perfection. Complete with breads, soups, and desserts, made from scratch daily. 
              <span className="underline" >Come see us soon!</span>
            </p>
            <button className="mt-5 md:mt-12 text-2xl font-bold bg-orange-950 p-2 w-44 m-auto rounded-xl transition duration-500 hover:scale-110 ">
                RESERVATION
            </button>
        </div>

        <div>
            <img src='./steak.jpg' className=" w-60 mt-5 mb-5 m-auto md:w-96 md:mr-12 rounded-full md:rounded-b-full" />
        </div>

    </div>
  )
}

export default Content