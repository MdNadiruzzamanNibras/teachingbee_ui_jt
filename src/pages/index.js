import CountDown from "@/Component/CountDown";
import CourseContent from "@/Component/CourseContent";
import CourseOverview from "@/Component/CourseOverview";
import DynamicInterview from "@/Component/DynamicInterview";
import PeopleSay from "@/Component/PeopleSay";


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
        <CourseOverview></CourseOverview>
        <CourseContent></CourseContent>
        <PeopleSay></PeopleSay>
      </div>
    </div>
  );
};

export default HomePage;