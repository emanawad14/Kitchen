
// import React from "react";
// import { Button } from "@heroui/react";
// import { FaWhatsapp, FaFacebook } from "react-icons/fa";
// import image1 from '../../public/WhatsApp Image 2025-09-27 at 23.53.11_5c7fa8dd.jpg'
// import image2 from '../../public/WhatsApp Image 2025-09-27 at 23.53.01_d4177574.jpg'
// import image3 from '../../public/WhatsApp Image 2025-09-28 at 00.06.40_0053058f.jpg'
// import image4 from '../../public/WhatsApp Image 2025-09-27 at 23.53.14_23fcad02.jpg'
// import image5 from '../../public/WhatsApp Image 2025-09-28 at 00.00.16_8ba95a25.jpg'
// import image6 from '../../public/WhatsApp Image 2025-09-27 at 23.58.21_071285ef.jpg'
// import image7 from '../../public/WhatsApp Image 2025-09-27 at 23.55.34_e1133493.jpg'
// import image8 from '../../public/WhatsApp Image 2025-09-27 at 23.52.55_5740356f.jpg'

// export default function Home() {
//   return (
//     <div className="w-full">
     
//       <section
//         className="relative h-screen flex flex-col items-center justify-center text-center text-white"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 px-6">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             مطبخ ألوميتالك .. ذوقك يبان في تفاصيل بيتك
//           </h1>
//           <p className="text-lg md:text-2xl mb-8">
//             خامات عالية الجودة · تصاميم عصرية · تسليم في الميعاد
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button
//               as="a"
//               href="https://wa.me/201063708830"
//               target="_blank"
//               rel="noopener noreferrer"
//               color="success"
//               size="lg"
//               variant="shadow"
//               startContent={<FaWhatsapp size={22} />}
//             >
//               اطلب معاينة مجانية
//             </Button>
//             <Button
//               as="a"
//               href="#gallery"
//               color="primary"
//               size="lg"
//               variant="shadow"
//               startContent={<FaFacebook size={22} />}
//             >
//               شوف أعمالنا
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="grid md:grid-cols-3 gap-3">
//           <div>
//             <img src={image1} alt="" />
//           </div>

//         </div>
//       </section>

    
//       {/* <section className="py-20 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-12">ليه تختارنا؟</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
//           <div className="p-6 bg-white shadow rounded-xl">
//             <span className="text-4xl">🛠️</span>
//             <h3 className="text-xl font-semibold mt-4">خامات عالية</h3>
//             <p className="mt-2 text-gray-600">
//               بنستخدم أفضل خامات الألوميتال المستوردة.
//             </p>
//           </div>
//           <div className="p-6 bg-white shadow rounded-xl">
//             <span className="text-4xl">🎨</span>
//             <h3 className="text-xl font-semibold mt-4">تصاميم عصرية</h3>
//             <p className="mt-2 text-gray-600">
//               ألوان وخطوط حديثة تناسب كل الأذواق.
//             </p>
//           </div>
//           <div className="p-6 bg-white shadow rounded-xl">
//             <span className="text-4xl">🚚</span>
//             <h3 className="text-xl font-semibold mt-4">التزام بالمواعيد</h3>
//             <p className="mt-2 text-gray-600">
//               نسلم شغلك في الميعاد المتفق عليه بدون تأخير.
//             </p>
//           </div>
//           <div className="p-6 bg-white shadow rounded-xl">
//             <span className="text-4xl">🤝</span>
//             <h3 className="text-xl font-semibold mt-4">ضمان وخدمة</h3>
//             <p className="mt-2 text-gray-600">
//               دعم وخدمة ما بعد البيع لراحة بالك.
//             </p>
//           </div>
//         </div>
//       </section>

     
//       <section id="gallery" className="py-20 bg-white text-center">
//         <h2 className="text-3xl font-bold mb-12">أعمالنا</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
//           <img
//             src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
//             alt="Kitchen 1"
//             className="rounded-xl shadow-lg"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1598300188629-0bb9e3a02d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
//             alt="Kitchen 2"
//             className="rounded-xl shadow-lg"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1624468198107-87f7860f1eeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
//             alt="Kitchen 3"
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

     
//       <section className="py-20 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-8">اتواصل معانا</h2>
//         <p className="mb-6 text-gray-600">للحجز أو الاستفسار</p>
//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <Button
//             as="a"
//             href="https://wa.me/201063708830"
//             target="_blank"
//             rel="noopener noreferrer"
//             color="success"
//             size="lg"
//             variant="shadow"
//             startContent={<FaWhatsapp size={24} />}
//           >
//             واتساب
//           </Button>
//           <Button
//             as="a"
//             href="https://www.facebook.com/share/1BSg2N1N3c/"
//             target="_blank"
//             rel="noopener noreferrer"
//             color="primary"
//             size="lg"
//             variant="shadow"
//             startContent={<FaFacebook size={24} />}
//           >
//             فيسبوك
//           </Button>
//         </div>
//       </section> */}


//     </div>
//   );
// }








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

export default function Home() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="w-full">
      {/* Hero Section */}
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
            مطبخ ألوميتالك .. ذوقك يبان في تفاصيل بيتك
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

      {/* Gallery Section */}
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
    </div>
  );
}
