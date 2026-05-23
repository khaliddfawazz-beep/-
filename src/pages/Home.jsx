import { Link } from "react-router-dom";
export default function VolunteerPlatformHome() {
  const opportunities = [
    {
      title: "تنظيم حملة دعم إنساني",
      city: "دمشق",
      hours: 15,
      category: "عمل إنساني"
    },
    {
      title: "تعليم الأطفال",
      city: "حلب",
      hours: 20,
      category: "تعليمي"
    },
    {
      title: "تنظيف الحدائق العامة",
      city: "حمص",
      hours: 10,
      category: "بيئي"
    }
  ];

  const topVolunteers = [
    {
      name: "محمد الأحمد",
      points: 3200,
      level: "قائد مجتمعي"
    },
    {
      name: "لين خالد",
      points: 2500,
      level: "مؤثر"
    },
    {
      name: "عمر ديب",
      points: 1800,
      level: "نشيط"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-green-700 flex items-center justify-center text-white text-xl font-bold">
            س
          </div>

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              منصة سند
            </h1>

            <p className="text-sm text-slate-500">
              للعمل التطوعي
            </p>
          </div>
        </div>

      
      
  
        <div className="flex gap-3">

             <Link
                to="/rankings"
                 className="px-5 py-2 rounded-xl bg-yellow-500 text-white hover:bg-yellow-600 transition"
             >
                 المتصدرون
             </Link>

              <Link
               to="/opportunities"
                 className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
             >
                الفرص
              </Link>

            <Link
                to="/manager"
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-900 transition"
            >
                لوحة الجهة المنظمة
            </Link>

            <Link
                 to="/login"
                  className="px-5 py-2 rounded-xl border border-green-700 text-green-700 hover:bg-green-50 transition"
            >
               تسجيل الدخول
            </Link>

            <Link
                to="/login"
              className="px-5 py-2 rounded-xl bg-green-700 text-white hover:bg-green-800 transition"
            > 
              إنشاء حساب
            </Link>

       </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6 text-right">
          
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            منصة تطوع للطلاب والشباب السوري
          </span>

          <h2 className="text-5xl font-extrabold leading-tight">
            كن جزءًا من
            <span className="block text-green-700 mt-3">
              صناعة الأثر الإيجابي
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-9">
            منصة تربط المتطوعين بالمبادرات المجتمعية والإنسانية
            بهدف تطوير المجتمع واكتساب الخبرات والمهارات.
          </p>

          <div className="flex gap-4 justify-end">
            
            <Link
             to="/dashboard"
             className="px-7 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition"
            >
             ابدأ الآن
            </Link>

            <Link
             to="/opportunities"
             className="px-7 py-4 bg-white border rounded-2xl hover:bg-slate-100 transition"
            >
             استعراض الفرص
           </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-700 to-emerald-500 rounded-[40px] h-[400px] flex items-center justify-center text-white text-center p-10 shadow-2xl">
          
          <div>
            <h3 className="text-4xl font-bold mb-5">
              +5000 متطوع
            </h3>

            <p className="text-xl leading-10">
              ساهم في المبادرات الإنسانية والتعليمية
              واحصل على نقاط وشهادات تطوعية.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid md:grid-cols-4 gap-6 px-10 py-12">
        
        {[
          { title: "عدد المتطوعين", value: "+5K" },
          { title: "الفرص المتاحة", value: "+120" },
          { title: "الساعات التطوعية", value: "+15K" },
          { title: "الشهادات الصادرة", value: "+2K" }
        ].map((item, index) => (
          
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-4xl font-extrabold text-green-700 mb-3">
              {item.value}
            </h3>

            <p className="text-slate-600 text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </section>

      {/* Opportunities */}
      <section className="px-10 py-20">
        
        <div className="flex items-center justify-between mb-10">
          
          <h2 className="text-4xl font-bold">
            الفرص التطوعية
          </h2>

          <button className="text-green-700 font-semibold">
            عرض الكل
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {opportunities.map((opportunity, index) => (
            
            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm"
            >
              
              <div className="h-52 bg-gradient-to-r from-green-700 to-emerald-500"></div>

              <div className="p-6 space-y-4 text-right">
                
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {opportunity.category}
                </span>

                <h3 className="text-2xl font-bold">
                  {opportunity.title}
                </h3>

                <div className="space-y-2 text-slate-600">
                  <p>📍 {opportunity.city}</p>
                  <p>⏱ {opportunity.hours} ساعة تطوعية</p>
                </div>

                <button className="w-full py-3 rounded-2xl bg-green-700 text-white">
                  انضم الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="px-10 py-20 bg-white">
        
        <div className="text-center mb-14">
          
          <h2 className="text-4xl font-bold mb-4">
            أفضل المتطوعين
          </h2>

          <p className="text-slate-600 text-lg">
            أكثر المتطوعين نشاطًا داخل المنصة
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          
          {topVolunteers.map((user, index) => (
            
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-6 flex items-center justify-between"
            >
              
              <div className="flex items-center gap-5">
                
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold">
                    {user.name}
                  </h3>

                  <p className="text-slate-500">
                    {user.level}
                  </p>
                </div>
              </div>

              <div className="text-green-700 font-bold text-2xl">
                {user.points} نقطة
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-10 py-14 mt-20">
        
        <div className="text-center">
          
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            منصة سند
          </h3>

          <p className="text-slate-300 leading-8">
            منصة تطوعية تهدف إلى دعم الشباب السوري
            وتعزيز العمل المجتمعي والإنساني.
          </p>

          <div className="mt-6 text-slate-400">
            © 2026 منصة سند - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
}