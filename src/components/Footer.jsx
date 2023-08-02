
function Footer() {
  return (
    <div className='bg-orange-950 font-mono px-3 py-5 opacity-90' id="contact">
        <h1 className='text-4xl text-center underline'> CONTACT US</h1>

        <div className='md:flex md:justify-between text-center mt-10'>
            <div>
                <img className='w-60 rounded-2xl m-auto mb-5' src='logo.jpg' />
            </div>

            <div className='md:mr-24 mt-5 text-xl'>
                <h1 className='font-bold'>ADRESS</h1>
                72 West 36th Street <br />
                New York NY 10018 <br />
            </div>

            <div className='md:mr-24 mt-5 text-xl'>
                <h1 className='font-bold'>RESERVATIONS</h1>
                05521425512 <br />
                05525642945 <br />
            </div>

            <div className='md:mr-24 mt-4 text-xl'>
                <h1 className='font-bold'>OFFICE HOURS:</h1> M-F 9:00 AM – 5:00 PM <br />
                <h1 className='font-bold'>ACCOUNTING HOURS:</h1> M-F 8:00 AM – 4:00 PM
            </div>
        </div>


    </div>
  )
}

export default Footer