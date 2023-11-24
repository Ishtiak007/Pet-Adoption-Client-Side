
import SectionTitleTwo from '../SectionTitle/SectionTitleTwo';
import OverlayBottom from './OverlayBottom';
import './OverlaySection.css';

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'

const OverlaySection = () => {
    return (
        <div className='bg-gray-100 p-3 rounded-md'>
            <SectionTitleTwo heading={'Yours at their pleasure - call us to action'} subHeading={'Create Happy Tails: Adopt a Pet and Make a Difference'} description={'In the theater of life, adoption is the starring act. Its a tale of resilience, love, and second chances. Choose adoption, and let your home be the stage for compassion.'}></SectionTitleTwo>

            <div>
                <div className="md:flex flex-wrap justify-evenly my-12">
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full rounded-lg  hover:scale-125 transition-all' src={img1} alt="" />
                        <div className="content">
                            <h1>Cherish resilient companions, transform challenges into love.</h1>
                            <p>In the embrace of adoption, lives transform. Choose rescue, choose love. Adopt a pet, unlock joy, and create a forever home filled with unconditional love, laughter, and furry companionship.</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full  rounded-lg' src={img2} alt="" />
                        <div className="content">
                            <h1>Embrace unique companions, turn challenges into love.</h1>
                            <p>Look, Adoption is a powerful act of compassion. When you open your heart to a shelter pet, youre not just changing their world; youre enriching yours with boundless love and loyalty.</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full  rounded-lg' src={img3} alt="" />
                        <div className="content">
                            <h1>Treasure distinctive friends, conquer hurdles with compassion.</h1>
                            <p>A pet is a commitment to love in adopted, a promise to cherish. Together, you embark on a journey of companionship, trust, and unwavering devotion. Rescue a heart, adopt a pet.</p>
                        </div>

                    </div>
                </div>
                <div className='md:flex flex-wrap justify-evenly mt-6'>
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full  rounded-lg' src={img4} alt="" />
                        <div className="content">
                            <h1>Champion extraordinary pets, overcome obstacles through dedication.</h1>
                            <p>Dive into the magic of adoption, where tails wag and hearts purr. Each rescued pet brings not only joy but a profound connection that transforms a house into a loving home.</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full rounded-lg' src={img5} alt="" />
                        <div className="content">
                            <h1>Celebrate special bonds, conquer challenges with open hearts.</h1>
                            <p>Adopting a pet is more than a decision; its a celebration of life. Together, you create a tapestry of shared moments, where love, loyalty, and laughter weave a beautiful bond.</p>
                        </div>

                    </div>
                    <div className="relative lg:w-[350px] md:w-[200px] lg:h-[260px]"
                        data-aos-duration="3000">
                        <img className='w-full h-full rounded-lg' src={img6} alt="" />
                        <div className="content">
                            <h1>Cherish uncommon allies, transform difficulties into lasting connections.</h1>
                            <p>Adoption is a symphony of second chances, a melody of compassion. Embrace the harmony of love as you rescue a pet, and watch as your lives compose a beautiful story.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="divider my-6"><h2 className='courgette'>Lets choose your option</h2></div>
            <OverlayBottom></OverlayBottom>
        </div>
    );
};

export default OverlaySection;