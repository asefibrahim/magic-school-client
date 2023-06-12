import React from 'react';
import Banner from '../HomeComponents/Banner/Banner';
import ClassSection from '../HomeComponents/ClassSectio0n/ClassSection';
import InstructorSection from '../HomeComponents/InstructorSection/InstractorSection';
import ExtraSectionOne from '../HomeComponents/ExtraSections/ExtraSectionOne';
import Slider from '../HomeComponents/Slider/Slider';
import ExtraSectionTwo from '../HomeComponents/ExtraSections/ExtraSectionTwo';


const MainHome = () => {
    return (
        <div className=''>
            <Slider></Slider>

            <ClassSection></ClassSection>
            <InstructorSection></InstructorSection>
            <ExtraSectionTwo></ExtraSectionTwo>
            <ExtraSectionOne></ExtraSectionOne>

        </div>
    );
};

export default MainHome;