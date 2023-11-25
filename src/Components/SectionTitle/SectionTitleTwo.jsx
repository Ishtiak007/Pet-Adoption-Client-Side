import titleLove from './titleLove.png'

const SectionTitleTwo = ({ subHeading, heading, description }) => {
    return (
        <div>
            <div className="text-left mt-12 md:w-2/3 mx-auto">
                <h3 className=" text-2xl font-bold text-gray-700 pb-2 lato text-center">{heading}</h3>
                <p className=" mb-3 text-2xl mt-1 text-center">{subHeading}</p>
                <p className='mb-3 courgette mt-1 text-center'>{description}</p>
                <img className='w-10 mx-auto' src={titleLove} alt="" />
            </div>
        </div>
    );
};

export default SectionTitleTwo;