import React from 'react';

import ClassSection from '../HomeComponents/ClassSectio0n/ClassSection';
import InstructorSection from '../HomeComponents/InstructorSection/InstractorSection';
import ExtraSectionOne from '../HomeComponents/ExtraSections/ExtraSectionOne';
import Slider from '../HomeComponents/Slider/Slider';
import ExtraSectionTwo from '../HomeComponents/ExtraSections/ExtraSectionTwo';
const isDark = false

const MainHome = () => {
    return (
        <div>
            <Slider></Slider>

            <ClassSection></ClassSection>
            <InstructorSection></InstructorSection>
            <ExtraSectionTwo></ExtraSectionTwo>
            <ExtraSectionOne></ExtraSectionOne>

        </div>
    );
};

export default MainHome;