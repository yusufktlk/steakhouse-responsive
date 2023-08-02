

function Menu() {

    const menus = [
        {
          img: "./dallas-steak.jpg",
          title: "Dallas Steak",
          text: "400 - 450 gr. veal cutlet, creamed spinach, baked potato"
        },
        {
          img: "./new-york-steak.jpg",
          title: "New York Steak",
          text: "300 - 350 gr. sirloin steak, creamed spinach, baked potato"
        },
        {
          img: "./t-bone-steak.jpg",
          title: "T-Bone Steak",
          text: "400 - 450 gr. boned beef back, creamed spinach, baked potato"
        },
        {
            img: "./cafe-de-paris.jpg",
            title: "Cafe de Paris",
            text: "200 gr. beef tenderloin, french fries"
          },
          {
            img: "./steak-tenderloin.jpg",
            title: "Beef Tenderloin",
            text: "200 gr. beef tenderloin, creamed spinach, baked potato"
          },
          {
            img: "./lamp-chops.jpg",
            title: "Lamb Chops",
            text: "200 gr. lamb chops, creamed spinach, baked potatoes"
          }
        ]


  return (
    <div id="menu" className="font-mono">
        <h1 className="text-5xl underline justify-center flex pt-5 mb-5" >MENU</h1>


        <div className="xl:grid md:grid-cols-3" >
        {
            menus.map((menu,key)=>
            <div key={key} className="p-5 ml-16  mr-16 " >
              <img className="rounded-xl w-96 m-auto transition duration-500 hover:scale-105" src={menu.img} />
              <h1 className="text-4xl pt-3 text-center font-bold">{menu.title}</h1>
              <p className="text-center text-2xl pt-5">{menu.text}</p>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default Menu