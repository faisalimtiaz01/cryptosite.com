import card3 from "./images/card01.png";
import './about.css'

const About = () => {
  return (
    <>
    <div className="bg-black overflow-x-hidden">
      <div className=" text-white flex px-0 md:flex md:justify-between items-center md:px-20 py-16">
        <div className="">
          <h1 className="text-1xl  md:text-6xl font-bold">600K</h1>
          <p className="text-sm md:text-2xl">Users worldwide</p>
        </div>
        <div>
          <h1 className="text-1xl md:text-6xl font-bold">15B+</h1>
          <p className="text-sm md:text-2xl">Payments are processed annually</p>
        </div>
        <div>
          <h1 className="text-1xl md:text-6xl font-bold">120+</h1>
          <p className="text-sm md:text-2xl">Countries are supported</p>
        </div>
        <div>
          <h1 className="text-1xl md:text-6xl font-bold">78+</h1>
          <p className="text-sm md:text-2xl">Currencies supported</p>
        </div>
      </div>

      <div className="md:flex ml-5 md:justify-between md:items-center px-6 w-[100%] md:py-8">

        <div className="w-[50%]">
          <img src={card3}  className="md:ml-10 w-[100%] md:w-[90%]" alt="card1" />

        </div>

        <div className="ml-6 w-[50%] text-white pr-6 mr-10">
          <h1 className=" text-1xl md:text-7xl mb-4  md:mb-16">
            Earn up to 12% BNB <br /> cashback every time
          </h1>
          <p className="text-sm md:text-lg ">
            All your cashback from eligible purchases are automatically
            deposited in your Funding Wallet so you only need to worry about
            spending crypto.
            Cashback will be distributed monthly in the form of BNB within 14
            days after the end of each months. You will be <br /> able to log in
            and check your cashback via Card Dashboard.
          </p>
        </div>
      </div>

  <div  className=" flex items-center h-[100vh]  ">
    <div className="text-white w-[40%] pl-16">
      <h1 className="text-4xl font-bold">Manage your crypto only when you need</h1>
      <p className="pt-8">Related to the points just made, rather than keeping coins on exchanges or brokerages with crypto card, it's far safer to custody your own assets.</p>

    </div>

    <div className="text-center w-[60%]  mt-20 original-transform ">
      <img src={card3}  alt="card3" className="w-72 mt-6 pt-8"/>
    
    </div>
   
  
    
  </div>
  
  

      </div>
    </>
  );
};

export default About;
