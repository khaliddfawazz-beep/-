import { Link } from "react-router-dom";

export default function ManagerDashboard() {

  const volunteers = [
    {
      name: "محمد الأحمد",
      opportunity: "حملة تنظيف الشوارع",
      status: "بانتظار القبول"
    },
    {
      name: "لين خالد",
      opportunity: "تعليم الأطفال",
      status: "مقبول"
    },
    {
      name: "عمر ديب",
      opportunity: "دعم الأسر المحتاجة",
      status: "مقبول"
    }
  ];

  const campaigns = [
    {
      title: "حملة تنظيف الحدائق",
      volunteers: 25,
      hours: 10
    },
    {
      title: "تعليم الأطفال",
      volunteers: 18,
      hours: 20
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-green-800 text-white p-8 hidden md:flex flex-col justify-between">

        <div>

          <h1 className="text-3xl font-extrabold mb-12">
            لوحة الجهة المنظمة
          </h1>

          <nav className="space-y-5">

            <Link
              to="/manager"
              className="block w-full text-right px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              الرئيسية
            </Link>

            <Link
              to="/opportunities"
              className="block w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              الفرص التطوعية
            </Link>

            <Link
              to="/dashboard"
              className="block w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              لوحة المتطوع
            </Link>

            <Link
              to="/"
              className="block w-full text-right px-5 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              الصفحة الرئيسية
            </Link>

          </nav>

        </div>

        <button className="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition">
          تسجيل الخروج
        </button>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Header */}
        <div className="bg-white rounded-[30px] p-8 shadow-sm mb-10 flex justify-between items-center">

          <div className="text-right">

            <h1 className="text-4xl font-extrabold text-slate-800">
              إدارة الحملات التطوعية
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              إنشاء وإدارة الفرص التطوعية والمتطوعين
            </p>

          </div>

          <button className="px-6 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition">
            + إنشاء فرصة جديدة
          </button>

        </div>

        {/* Statistics */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">

          {[
            {
              title: "عدد الحملات",
              value: "12"
            },
            {
              title: "عدد المتطوعين",
              value: "86"
            },
            {
              title: "إجمالي الساعات",
              value: "1200"
            }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-sm text-center"
            >

              <h2 className="text-4xl font-extrabold text-green-700 mb-4">
                {item.value}
              </h2>

              <p className="text-slate-500 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </section>

        {/* Campaigns */}
        <section className="bg-white rounded-[30px] p-8 shadow-sm mb-10">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              الحملات الحالية
            </h2>

            <button className="text-green-700 font-semibold">
              عرض الكل
            </button>

          </div>

          <div className="space-y-5">

            {campaigns.map((campaign, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 flex justify-between items-center"
              >

                <div className="text-right">

                  <h3 className="text-2xl font-bold">
                    {campaign.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    👥 {campaign.volunteers} متطوع
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full">
                  ⏱ {campaign.hours} ساعة
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* Volunteers Requests */}
        <section className="bg-white rounded-[30px] p-8 shadow-sm">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              طلبات المتطوعين
            </h2>

            <button className="text-green-700 font-semibold">
              عرض الكل
            </button>

          </div>

          <div className="space-y-5">

            {volunteers.map((volunteer, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-5"
              >

                <div className="text-right">

                  <h3 className="text-2xl font-bold">
                    {volunteer.name}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {volunteer.opportunity}
                  </p>

                </div>

                <div className="flex gap-3">

                  <button className="px-5 py-3 rounded-xl bg-green-700 text-white hover:bg-green-800 transition">
                    قبول
                  </button>

                  <button className="px-5 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
                    رفض
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}