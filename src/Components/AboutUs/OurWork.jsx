import img1 from '../AboutUs/img/fun.png'
import img2 from '../AboutUs/img/grooming.png'
import img3 from '../AboutUs/img/hotel.png'
import img4 from '../AboutUs/img/training.png'
import img5 from '../AboutUs/img/vaccine.png'
import img6 from '../AboutUs/img/vetenary.png'

const OurWork = () => {
    return (
        <div className='lg:flex md:flex gap-5 flex-wrap justify-center'>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img1} className='w-[130px] h-[115px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Fun Activities</h2>
                    <p className='text-gray-600'>Pamper your pets with our Pet Hotels fun activities! Tail-wagging joy guaranteed with games, treats, and personalized care. Ultimate pet retreat!</p>
                </div>
            </div>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img2} className='w-[130px] h-[115px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Grooming services</h2>
                    <p className='text-gray-600'>Indulge your pets with our expert grooming services—tailored care, luxurious treatments, and a touch of pampering for a fresh, happy pet.</p>
                </div>
            </div>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img3} className='w-[130px] h-[115px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pet Hostel</h2>
                    <p className='text-gray-600'>Experience peace of mind with our pet hostel. Comfy stays, loving care, and playful interactions ensure your pets feel at home.</p>
                </div>
            </div>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img4} className='w-[130px] h-[115px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Training</h2>
                    <p className='text-gray-600'>Unlock your pets potential with our training. Positive reinforcement, expert guidance, and tailored programs for well-behaved, happy companions.</p>
                </div>
            </div>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img5} className='w-[130px] h-[115px]' alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Vaccine</h2>
                    <p className='text-gray-600'>Safeguard your pets health with our vaccination services. Expert care, timely immunizations, and a commitment to their well-being. Protecting furry lives.</p>
                </div>
            </div>
            <div className="card card-compact lg:w-96 bg-slate-50 shadow-md">
                <figure><img src={img6} className='w-[130px] h-[115px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Donation Campaign</h2>
                    <p className='text-gray-600'>Support our injured pet donation campaign. Your generosity heals wounds, restores hope, and gives injured pets a brighter, healthier future.</p>
                </div>
            </div>
        </div>
    );
};

export default OurWork;