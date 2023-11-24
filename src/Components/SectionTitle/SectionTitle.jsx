import titleImg from './titleTop.png';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className="md:w-3/12 mx-auto text-center my-8 ">
                <img className='w-10 mx-auto' src={titleImg} alt="" />
                <h3 className=" text-2xl italic uppercase text-gray-700 border-dashed border-black border-b-2 pb-2 lato">{heading}</h3>
                <p className=" mb-3 courgette mt-1">. . . {subHeading} . . .</p>
            </div>
        </div>
    );
};

export default SectionTitle;