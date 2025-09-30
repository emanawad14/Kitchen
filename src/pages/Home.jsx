
import React from "react";
import { Button } from "@heroui/react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import image1 from "../../public/WhatsApp Image 2025-09-27 at 23.53.11_5c7fa8dd.jpg";
import image2 from "../../public/WhatsApp Image 2025-09-27 at 23.53.01_d4177574.jpg";
import image3 from "../../public/WhatsApp Image 2025-09-28 at 00.06.40_0053058f.jpg";
import image4 from "../../public/WhatsApp Image 2025-09-27 at 23.53.14_23fcad02.jpg";
import image5 from "../../public/WhatsApp Image 2025-09-28 at 00.00.16_8ba95a25.jpg";
import image6 from "../../public/WhatsApp Image 2025-09-27 at 23.58.21_071285ef.jpg";
import image7 from "../../public/WhatsApp Image 2025-09-27 at 23.55.34_e1133493.jpg";
import image8 from "../../public/WhatsApp Image 2025-09-27 at 23.52.55_5740356f.jpg";
import image9 from "../../public/WhatsApp Image 2025-09-27 at 23.53.33_5eb36d29.jpg";
import image10 from "../../public/WhatsApp Image 2025-09-27 at 23.53.11_5c7fa8dd.jpg";
import image11 from "../../public/WhatsApp Image 2025-09-27 at 23.57.06_fce70d38.jpg";
import image12 from "../../public/WhatsApp Image 2025-09-28 at 00.08.12_94228fac.jpg";

import imaged1 from '../../public/Kitchen appliances-amico.png'
import imaged2 from '../../public/Kitchen appliances-pana.png'
import imaged3 from '../../public/Kitchen appliances-rafiki.png'


export default function Home() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

  return (
    <div className="w-full">

      <section
        className="relative h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            مطبخ الألوميتال .. ذوقك يبان في تفاصيل بيتك
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            خامات عالية الجودة · تصاميم عصرية · تسليم في الميعاد
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              as="a"
              href="https://wa.me/201063708830"
              target="_blank"
              rel="noopener noreferrer"
              color="success"
              size="lg"
              variant="shadow"
              startContent={<FaWhatsapp size={22} />}
            >
              اطلب معاينة مجانية
            </Button>
            <Button
              as="a"
              href="#gallery"
              color="primary"
              size="lg"
              variant="shadow"
              startContent={<FaFacebook size={22} />}
            >
              شوف أعمالنا
            </Button>
          </div>
        </div>
      </section>


      <section id="gallery" className="py-16 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            شغلنا بيتكلم عننا ✨
          </h2>
          <p className="text-lg text-gray-600">
            هنا هتلاقي مجموعة من أفضل التصميمات اللي نفذناها لعملائنا، من مطابخ
            مودرن لأعمال كلاسيك كلها بأجود الخامات وأحلى التشطيبات.

          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={`work-${i}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>





      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          اختر من بين أرقى التصاميم الإيطالية والأمريكية بتفاصيل دقيقة وجودة متكاملة
        </h2>


        <h2 className="text-2xl font-bold text-center mb-6">
          من الكلاسيكية الإيطالية للأناقة الأمريكية.. اختار التصميم اللي يعكس شخصيتك ويضيف لمسة فاخرة لبيتك
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">


          <div className="text-center md:text-left">
            <img
              src={image1}
              alt="مطبخ شيك"
              className="w-full h-64 object-cover rounded-lg shadow-xl mb-6"
            />
            <h2 className="text-3xl font-bold mb-2">المهندس/ إسلام تعلب</h2>
            <p className="text-gray-600 mb-4">أفضل تصميمات مطابخ الألوميتال العصرية</p>
            <p className="text-gray-500"> العنوان: القاهرة - مصر</p>
            <p className="text-gray-500"> للتواصل: 01063708830</p>
          </div>


          <div className="flex flex-col items-center justify-center gap-6 relative">



            <div className="flex gap-6">
              <img
                src={imaged1}
                alt="مطبخ"
                className="w-35 h-35 rounded-full object-cover shadow-lg hover:scale-105 transition"
              />
              <img
                src={imaged2}
                alt="مطبخ"
                className="w-35 h-35 rounded-full object-cover shadow-lg hover:scale-105 transition"
              />
            </div>
            <div>
              <img
                src={imaged3}
                alt="مطبخ"
                className="w-35 h-35 rounded-full object-cover shadow-lg hover:scale-105 transition"
              />
            </div>
          </div>




        </div>
      </section>

    </div>
  );
}
