export default function Dashboard() {
  const activities = [
    {
      title: "تعليم الأطفال",
      hours: 20,
      status: "مكتملة"
    },
    {
      title: "تنظيف الحدائق",
      hours: 10,
      status: "جارية"
    },
    {
      title: "دعم الأسر المحتاجة",
      hours: 15,
      status: "مكتملة"
    }
  ];

  const badges = [
    "متطوع نشيط",
    "قائد مجتمعي",
    "100 ساعة تطوعية"
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-green-800 text-white p-8 hidden md:flex flex-col justify-between">

        <div>
          <h1 className="text-3xl font-extrabold mb-12">
            منصة سند
          </h1>

          <nav className="space-y-5">

            <button className="w-full text-right px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition">
              الرئيسية
            </button>

            <button className="w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition">
              الفرص التطوعية
            </button>

            <button className="w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition">
              الشهادات
            </button>

            <button className="w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition">
              الترتيب
            </button>

            <button className="w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition">
              الإعدادات
            </button>

          </nav>
        </div>

        <button className="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition">
          تسجيل الخروج
        </button>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="bg-white rounded-[30px] p-8 shadow-sm flex flex-col md:flex-row justify-between items-center mb-8">

          <div className="text-right">
            <h2 className="text-4xl font-extrabold text-slate-800">
              مرحبًا، محمد 👋
            </h2>

            <p className="text-slate-500 mt-3 text-lg">
              استمر بصناعة الأثر الإيجابي داخل المجتمع
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-5">

            <div className="text-right">
              <h3 className="text-2xl font-bold">
                محمد الأحمد
              </h3>

              <p className="text-slate-500">
                طالب هندسة معلوماتية
              </p>
            </div>

            <div className="w-20 h-20 rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
              م
            </div>

          </div>
        </div>

        {/* Statistics */}
        <section className="grid md:grid-cols-4 gap-6 mb-10">

          {[
            {
              title: "النقاط",
              value: "3200"
            },
            {
              title: "الساعات التطوعية",
              value: "150"
            },
            {
              title: "الفرص المكتملة",
              value: "18"
            },
            {
              title: "الترتيب",
              value: "#7"
            }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-sm text-center"
            >
              <h3 className="text-4xl font-extrabold text-green-700 mb-4">
                {item.value}
              </h3>

              <p className="text-slate-500 text-lg">
                {item.title}
              </p>
            </div>

          ))}

        </section>

        {/* Progress Section */}
        <section className="bg-white rounded-[30px] p-8 shadow-sm mb-10">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              مستوى المتطوع
            </h2>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full">
              قائد مجتمعي
            </span>

          </div>

          <div className="w-full bg-slate-200 h-5 rounded-full overflow-hidden">

            <div className="bg-green-700 h-full w-[65%] rounded-full"></div>

          </div>

          <div className="flex justify-between mt-4 text-slate-500">
            <span>3200 نقطة</span>
            <span>5000 نقطة</span>
          </div>

        </section>

        {/* Activities */}
        <section className="bg-white rounded-[30px] p-8 shadow-sm mb-10">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              النشاطات الأخيرة
            </h2>

            <button className="text-green-700 font-semibold">
              عرض الكل
            </button>

          </div>

          <div className="space-y-5">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-2xl p-5"
              >

                <div className="text-right">
                  <h3 className="text-xl font-bold">
                    {activity.title}
                  </h3>

                  <p className="text-slate-500">
                    {activity.hours} ساعة تطوعية
                  </p>
                </div>

                <span className={`px-4 py-2 rounded-full text-sm ${
                  activity.status === "مكتملة"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {activity.status}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* Badges */}
        <section className="bg-white rounded-[30px] p-8 shadow-sm">

          <h2 className="text-3xl font-bold mb-8">
            الشارات والإنجازات
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {badges.map((badge, index) => (

              <div
                key={index}
                className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center"
              >

                <div className="text-5xl mb-4">
                  🏆
                </div>

                <h3 className="text-2xl font-bold text-green-700">
                  {badge}
                </h3>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}