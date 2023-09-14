import profile from '../../Images/user.png'

const Header = () => {
    return (
        <div className='flex justify-between py-4 border-b-2'>
            <h2 className='text-2xl font-bold text-sky-800'>Header</h2>
            <img className='w-10' src={profile} alt="" />
        </div>
    );
};

export default Header;