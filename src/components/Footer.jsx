
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#284b63] text-white mt-4 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div>
          <h1 className="text-2xl font-bold mb-3">تـعـلـب كـتـشـن</h1>
          <p className="text-sm mb-4">
            شريكك الموثوق لجميع مشاريع الألوميتال  الخاصة بك
          </p>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <a href="#" className="bg-blue-600 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-black p-2 rounded-full">
              <FaTiktok />
            </a>
            <a href="#" className="bg-gray-500 p-2 rounded-full">
              <MdEmail />
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="font-bold text-lg mb-3">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">الرئيسية</a></li>
            <li><a href="#" className="hover:underline">من نحن</a></li>
            <li><a href="#" className="hover:underline">الخدمات</a></li>
            <li><a href="#" className="hover:underline">الأعمال</a></li>
            <li><a href="#" className="hover:underline">اتصل بنا</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-3">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MdLocationOn /> برج النور الحمص
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> 01063708830
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> 01063708830
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@emo-renovation.be
            </li>
          </ul>
        </div>
      </div>

     
      <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
       2025 © تـعـلـب كـتـشـن - جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

