import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <h2 className="text-3xl font-bold text-center mb-4">تواصل معنا اليوم</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          هل لديك مشروع بناء أو تجديد؟ فريق "تـعـلـي كـتـشـن" مستعد لمساعدتك!
          يمكنك بسهولة التواصل معنا عبر القنوات التالية للحصول على استشارة مجانية
          وعرض سعر مخصص.
        </p>

        {/* نموذج الاتصال + الخريطة */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2">
            {/* الفورم */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center mb-2">نموذج الاتصال</h3>
              <p className="text-center text-gray-500 mb-6">املأ النموذج أدناه</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full border-b border-gray-300 focus:outline-none p-2"
                />
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  className="w-full border-b border-gray-300 focus:outline-none p-2"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full border-b border-gray-300 focus:outline-none p-2"
                />
                <textarea
                  placeholder="اكتب رسالتك هنا"
                  rows="4"
                  className="w-full border-b border-gray-300 focus:outline-none p-2"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  ✉ إرسال
                </button>
              </form>
            </div>

            {/* الخريطة */}
            <div className="h-full">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.046759963481!2d4.139113315745245!3d51.16514817957766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3efb68d7b7f2d%3A0x2a62c6c1c1f34a87!2sSint-Niklaas!5e0!3m2!1sen!2sbe!4v1633012345678!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* قسم معلومات التواصل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* الهاتف */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MdPhone className="text-4xl mx-auto text-blue-900 mb-3" />
            <h4 className="font-bold text-lg mb-2">الهاتف</h4>
            <p className="text-gray-700">+32 491 129917</p>
            <p className="text-gray-700">+32 465 218194</p>
            <p className="text-gray-500 text-sm mt-1">
              من الإثنين إلى الجمعة: 8ص - 6م
            </p>
          </div>

          {/* البريد */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MdEmail className="text-4xl mx-auto text-blue-900 mb-3" />
            <h4 className="font-bold text-lg mb-2">البريد الإلكتروني</h4>
            <p className="text-gray-700">info@emo-renovation.be</p>
            <p className="text-gray-500 text-sm mt-1">نرد خلال 24 ساعة</p>
          </div>

          {/* العنوان */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MdLocationOn className="text-4xl mx-auto text-blue-900 mb-3" />
            <h4 className="font-bold text-lg mb-2">العنوان</h4>
            <p className="text-gray-700">شارع الملوك الثلاثة 215، 9100 سينت-نيكلاس</p>
            <p className="text-gray-500 text-sm mt-1">1000 فيل، بلجيكا</p>
          </div>
        </div>
      </div>
    </div>
  );
}
