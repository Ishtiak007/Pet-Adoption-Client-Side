const CoverTwo = ({ image, heading }) => {
    return (
        <div style={{ '--image-url': `url(${image})` }}
            className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover'>
            <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-white text-4xl font-semibold font-serif">{heading}</h1>
                </div>
            </div>
        </div>
    );
};

export default CoverTwo;