import React from 'react';

import ClassSection from '../HomeComponents/ClassSectio0n/ClassSection';
import InstructorSection from '../HomeComponents/InstructorSection/InstractorSection';
import ExtraSectionOne from '../HomeComponents/ExtraSections/ExtraSectionOne';
import Slider from '../HomeComponents/Slider/Slider';
import ExtraSectionTwo from '../HomeComponents/ExtraSections/ExtraSectionTwo';
import ExtraSectionThree from '../HomeComponents/ExtraSections/ExtraSectionThree';
import ExtraFour from '../HomeComponents/ExtraSections/ExtraFour';
import Review from '../HomeComponents/ExtraSections/Review';


const MainHome = () => {
    return (
        <div>
            <Slider></Slider>
            <ExtraSectionThree></ExtraSectionThree>
            <ClassSection></ClassSection>
            <InstructorSection></InstructorSection>
            <ExtraSectionTwo></ExtraSectionTwo>
            <Review></Review>
            <ExtraFour></ExtraFour>


        </div>
    );
};

export default MainHome;