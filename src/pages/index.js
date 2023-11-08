import CountDown from "@/Component/CountDown";
import DynamicInterview from "@/Component/DynamicInterview";


const HomePage = () => {
  return (
    <div>
      <div className='bg-cyan-300'>
        <CountDown></CountDown>
      </div>
      <div>
        <div className="bg-black">
          <DynamicInterview></DynamicInterview>
        </div>
      </div>
    </div>
  );
};

export default HomePage;