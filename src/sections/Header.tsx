import ArrowRight from "@/assets/arrow-right.svg";
import Logo from '@/assets/thembads.png';
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 ">
      {/* Top announcement banner */}
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Digital Change is powerful-But only when it is protected</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Empower Your Digital Journey</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      
      {/* Main header - transparent background with blur */}
      <div className="py-4 bg-gradient-to-b from-white to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Image src={Logo} alt="Saas Logo" height={70} width={70} />
            </div>
            
            {/* Mobile menu button */}
            <MenuIcon className="h-5 w-5 md:hidden"/>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex gap-8 text-gray-600 items-center">
                <a href="#" className="hover:text-gray-900">About</a>
                <a href="#" className="hover:text-gray-900">Features</a>
                <a href="#" className="hover:text-gray-900">Customers</a>
                <a href="#" className="hover:text-gray-900">Updates</a>
                <a href="#" className="hover:text-gray-900">Help</a>
              </nav>
            </div>
            
            {/* CTA button */}
            <div className="hidden md:block">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight hover:bg-gray-800 transition-colors">Empower Your Journey</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
