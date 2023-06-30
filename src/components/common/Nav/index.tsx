import { Link } from 'react-router-dom';
import NavList from './NavList';

const Nav = () => {
  return (
    <nav className="flex flex-col w-[300px] lg:hidden  p-4 pt-7 bg-[#F8FAFC] overflow-y-auto">
      <Link to="/">
        <div className="text-[rgb(116,124,153)] p-3 mb-10 font-medium border border-solid border-gray-300 bg-white rounded-md transition-all duration-150 hover:shadow-sectionInput">
          &#43; &nbsp; 上传简历
        </div>
      </Link>
      <Link to="/">
        <div className="text-[rgb(116,124,153)] p-3 mb-10 font-medium border border-solid border-gray-300 bg-white rounded-md transition-all duration-150 hover:shadow-sectionInput">
          &#43; &nbsp; 开始面试
        </div>
      </Link>
      <NavList />
    </nav>
  );
};

export default Nav;
