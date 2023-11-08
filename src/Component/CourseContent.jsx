import  { useState } from 'react';
import { PiCaretUpBold, PiCaretDown } from 'react-icons/pi';
import { LiaFileContractSolid } from 'react-icons/lia';
import { AiFillLock} from 'react-icons/ai';
const CourseContent = () => {
   
    const [show, setShow] = useState(false)
    const [two, setTwo] = useState(false)
    
  
     
    return (
        <div className='text-black w-full lg:w-[800px] my-10 mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold'>Course Content
</h2>  <p>• 7 Chapters • 73 Lessons</p>
         </div>
            <div className='border  py-2 border-gray-400 rounded'>
                <div className='border-b px-4 border-gray-400'>
                    <div className='flex justify-between items-center cursor-pointer' onClick={()=>setShow(!show)}>
                        <h4 className='text-2xl font-bold'>1. Introduction
                        </h4>
                        <p className='flex items-center'> 1 lesson  { show ? <PiCaretUpBold/>:<PiCaretDown/>}</p>
                        
                    </div>
                    {
                        show &&  <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">What is Dynamic Programming?</a>
                    </div>
                   }
                </div>
                <div className='border-b px-4 border-gray-400'>
                    <div className='flex justify-between items-center cursor-pointer' onClick={()=>setTwo(!two)}>
                        <h4 className='text-2xl font-bold'>2. Pattern 1: 0/1 Knapsack
                        </h4>
                        <p className='flex items-center'> 1 lesson  { two ? <PiCaretUpBold/>:<PiCaretDown/>}</p>
                        
                    </div>
                    {
                        two &&
                        <>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Introduction</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">0/1 Knapsack</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Solution: 0/1 Knapsack</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Equal Subset Sum Partition</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Solution: Equal Subset Sum Partition</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Subset Sum</a>
                    </div>
                        <div className='flex items-center '>
                       <span><AiFillLock/></span> <a className='ml-4' href="#">Solution: Subset Sum</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Minimum Subset Sum Difference </a>
                    </div>
                        <div className='flex items-center '>
                       <span><AiFillLock/></span> <a className='ml-4' href="#">Solution: Minimum Subset Sum Difference</a>
                    </div>
                        <div className='flex items-center '>
                       <span><LiaFileContractSolid/></span> <a className='ml-4' href="#">Count of Subset Sum</a>
                    </div>
                        </>
                   }
                </div>
           </div>



        </div>
     
          
       
    );
};

export default CourseContent;