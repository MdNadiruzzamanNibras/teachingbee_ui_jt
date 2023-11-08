import  { useState } from 'react';

const CourseContent = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
const accordionData = [
    {id:1, title: 'Accordion 1', content: 'Content for Accordion 1' },
    {id:2, title: 'Accordion 2', content: 'Content for Accordion 2' },
    {id:3, title: 'Accordion 3', content: 'Content for Accordion 3' },
    {id:4, title: 'Accordion 4', content: 'Content for Accordion 4' },
    {id:5, title: 'Accordion 5', content: 'Content for Accordion 5' },
    {id:6, title: 'Accordion 6', content: 'Content for Accordion 6' },
    {id:7, title: 'Accordion 7', content: 'Content for Accordion 7' },
  ];
  
     
    return (
        <div className='text-black'>
            <h1 className='text-4xl'>thie</h1>
            <div>
                {
                    accordionData.map(d =>
                        <p key={d.id}>
                            {d.title}
                        </p>)
                }


        </div>



        </div>
     
          
       
    );
};

export default CourseContent;