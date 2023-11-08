import Image from 'next/image';
import avatar from '../../public/images/profileAvatar.webp'
import { IoLogoLinkedin } from 'react-icons/io5';
const PeopleSay = () => {
    const peoples = [
        {
            id: 1,
            name: "MO JAFRI",
            comment:"The courses which have  before them, are exceptionally well put together! These courses magically condense 3 years of CS in short bite-size courses and lectures (I have tried System Design, OODI, and Coding patterns). The Grokking courses are godsent, to be honest."
        },
        {
            id: 2,
            name: "ABHISHEK GUPTA",
            comment:"My offer from the top tech company would not have been possible without this course. Many thanks!!"
        },
        {
            id: 3,
            name: "AHMET HANIF",
            comment:"Whoever put this together, you folks are life savers. Thank you :)"
        },
        {
            id: 4,
            name: "KAUSHIK JONNADULA",
            comment:"Thanks for a great resource! You guys are a lifesaver. I struggled a lot in design interviews, and this course gave me an organized process to handle a design problem. Please keep adding more questions."
        },
    ]
    return (
        <div className="mx-auto">
            <div className='lg:w-[800px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    peoples.map(people =>
                        
                        <div key={people.id} className="w-96 border px-6 py-3 mx-0 border-gray-500 rounded-lg ">
                            <div className='flex justify-between  items-center'>
                                <div><Image className='w-16 h-16 rounded-full' src={avatar} alt='the avatar' /></div>
                                <div>
                                    <h4>{ people.name}</h4>
                                    <p>Software Engineer</p>

                                </div>
                                <div>
                                    <h4 className='text-2xl text-blue-600'><IoLogoLinkedin/></h4>
                                </div>
                           </div>
                            <div>
                                <p>{people.comment }</p>
                           </div>
                            
                </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default PeopleSay;