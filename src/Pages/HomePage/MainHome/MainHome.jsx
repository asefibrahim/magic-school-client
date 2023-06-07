import React from 'react';
import Banner from '../HomeComponents/Banner/Banner';
import ClassSection from '../HomeComponents/ClassSectio0n/ClassSection';
import InstructorSection from '../HomeComponents/InstructorSection/InstractorSection';

const MainHome = () => {
    return (
        <div className='bg-[#1d1c1c]'>
            <Banner></Banner>
            <ClassSection></ClassSection>
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default MainHome;