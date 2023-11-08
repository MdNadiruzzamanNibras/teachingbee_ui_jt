import { MdElectricBolt } from 'react-icons/md';
import {AiOutlineClockCircle } from 'react-icons/ai';
import {BiPhotoAlbum } from 'react-icons/bi';
import {GiBookCover } from 'react-icons/gi';

const DynamicInterview = () => {
    return (
        <div className="ml-0 lg:ml-96 py-20 text-white">
            <div>
                <h1 className="text-3xl"><span>Grokking Dynamic Programming Patterns for Coding</span>
                    <br className="hidden lg:block" />   <span>Interviews</span></h1>
                <p className='text-lg font-medium mt-5'>Master Dynamic Programming by learning coding patterns. Act smartly, and follow the <br className="hidden lg:block" /> Dynamic Programming patterns.</p>
                <div>
                    <div className='flex justify-start items-center mt-4'>
                       <p className='flex items-center text-base justify-center py-1 shadow-md rounded bg-slate-800 w-48'> <MdElectricBolt/> <span className='ml-2'>Level:
Advanced</span></p>
                       <p className='flex items-center ml-2 text-base justify-center py-1 bg-slate-800 w-48'> <AiOutlineClockCircle/> <span className='ml-1'>Study Time:
61h</span></p>
                       <p className='flex items-center ml-2 text-base justify-center py-1 bg-slate-800 w-48'> <GiBookCover/> <span className='ml-1'>Lessons:
73</span></p>
                       <p className='flex items-center ml-2 text-base justify-center py-1 bg-slate-800 w-48'> <BiPhotoAlbum/> <span className='ml-1'>Playgrounds :
142</span></p>
                    </div>
                    <div className='mt-7'>
                         <p className='flex items-center text-base justify-center py-1 bg-slate-800 w-48'> <MdElectricBolt/> <span className='ml-1'>39,106 (Students)</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicInterview;