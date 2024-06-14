
const Hero = () => {
    const heroStyle = {
      backgroundImage: `url('https://themes.muffingroup.com/be/medic/wp-content/uploads/2014/11/home_doctor_subheader.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      minHeight: '90vh',
      width: '100%', 
      display: 'flex',
      alignItems: 'flex-start', 
      justifyContent: 'flex-start', 
      color: '#fff',
    };
  
    const contentStyle = {
      maxWidth: '600px',
      padding: '0 20px',
      top: '20%'
    };
  
    return (
      <article style={heroStyle}>
        <div style={contentStyle}>
          <h1 className='text-slate-500 text-5xl mb-4 my-40 ml-20 absolute font-serif '>Welcome To Our Clinic</h1>
          <p className='hover:text-gray-500 my-60 ml-20 text-slate-800 mb-6 p-2 '>Embark on a journey where booking your next doctor's appointment becomes a breeze.
            Navigate effortlessly through our diverse roster of healthcare providers to find the perfect match for your needs.
            Whether it's routine care or urgent attention, our platform ensures convenience and clarity with every click.
            Trust in our commitment to quality care and seamless scheduling. Start your journey to better health today—make your appointment effortlessly.</p>
          <button className='ml-20 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            Make an Appointment
          </button>
        </div>
      </article>
    );
  };
  
  export default Hero;
  