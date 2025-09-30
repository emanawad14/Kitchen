
import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaTools, FaUserFriends } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#284b63] text-white py-12">
      <div className="container mx-auto px-4">
      
        <h2 className="text-3xl font-bold text-center mb-12">
          لماذا نحن مختلفون
        </h2>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
          <div className="bg-white text-[#284b63] rounded-xl shadow-md p-6 text-center">
            <FaCheckCircle className="text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">معتمدون بشكل صحيح</h3>
            <p className="text-sm">
                يمكنك الوثوق بأن عملنا يتم وفق أعلى المعايير
            </p>
          </div>

          {/* بوكس 2 */}
          <div className="bg-white text-[#284b63] rounded-xl shadow-md p-6 text-center">
            <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">منطقة عمل واسعة</h3>
            <p className="text-sm">
              نغطي العديد من المناطق والمدن المحيطة لتلبية احتياجات جميع عملائنا.
            </p>
          </div>

          {/* بوكس 3 */}
          <div className="bg-white text-[#284b63] rounded-xl shadow-md p-6 text-center">
            <FaTools className="text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">كل شيء تحت سقف واحد</h3>
            <p className="text-sm">
        أي مهمة لديك، يمكننا تنفيذها وباعلي لخامات المتاحة حاليا      ا.
            </p>
          </div>

          {/* بوكس 4 */}
          <div className="bg-white text-[#284b63] rounded-xl shadow-md p-6 text-center">
            <FaUserFriends className="text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">ودودون وموثوقون</h3>
            <p className="text-sm">
              نحن فخورون بخدمة العملاء الممتازة وجودة العمل. راجع تقييماتنا!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

