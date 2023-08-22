
import About from "./about";
import card1 from "./images/card01.png";
import card2 from './images/card02.png'

const Home = () => {
  return (
    <div className=" flex  flex-col md:flex md:flex-row items-center pt-4 md:pt-0   w-[100%]  bg-gradient-to-r   from-indigo-500 h-[100vh]">
      <div className="w-[50%] md:ml-16 flex flex-col mb-1 md:mb-20 ">
        <h1 className=" text-2xl  md:text-5xl font-bold font-mono  md:pt-28 text-[#ffffff]  md:mb-2">The world's most <br/> advanced virtual <br /> crypto card.</h1>
        <p className=" md:text-1xl text-sm md:mt-5 font-mono text-slate-100">
          Crypto credit cards allow cardholders to earn rewards in bitcoin,
          ether, and  other cryptocurrencies rather than traditional points, & up
          to 12% cryptocurrency rewards < br /> on all spending.
        </p>
        <button className="rounded-full  bg-violet-800  hover:bg-indigo-500 text-white text-center px-3 py-2 mt-4 w-full md:w-[30%] ">
         Get Start Now
        </button>
      </div>
      <div className="w-[50%] mt-10 ml-10  flex flex-col items-center">
        
        <img
          className=" w-[80%] md:w-[60%] mb-10 md:mb-20 rotate-[10deg]   "
          src={card1}
          alt="imge-card"
        />
        <img src={card2} alt="card2-image  " className=" w-[80%] md:w-[60%] rotate-[-10deg] ml-4 md:ml-20 " />
      </div>
    
    </div>
   
  );
};

export default Home;
