import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { OpportunityContext } from "../context/OpportunityContext";

export default function ManagerDashboard() {
  const { opportunities, setOpportunities } = useContext(OpportunityContext);
  

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleAddOpportunity = (e) => {
  e.preventDefault();

  setOpportunities([
    ...opportunities,
    formData
  ]);

  setFormData({
    title: "",
    city: "",
    hours: "",
    category: ""
  });
};
  const [formData, setFormData] = useState({
  title: "",
  city: "",
  hours: "",
  category: ""
});
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

  

const [title, setTitle] = useState("");
const [hours, setHours] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <div className="bg-white p-8 rounded-3xl shadow-sm mb-10">

  <h2 className="text-3xl font-bold mb-6 text-right">
    إضافة فرصة تطوعية
  </h2>

  <form
    onSubmit={handleAddOpportunity}
    className="grid md:grid-cols-2 gap-5"
  >

    <input
      type="text"
      name="title"
      placeholder="اسم الفرصة"
      value={formData.title}
      onChange={handleChange}
      className="p-4 rounded-2xl border text-right"
    />

    <input
      type="text"
      name="city"
      placeholder="المدينة"
      value={formData.city}
      onChange={handleChange}
      className="p-4 rounded-2xl border text-right"
    />

    <input
      type="number"
      name="hours"
      placeholder="عدد الساعات"
      value={formData.hours}
      onChange={handleChange}
      className="p-4 rounded-2xl border text-right"
    />

    <input
      type="text"
      name="category"
      placeholder="التصنيف"
      value={formData.category}
      onChange={handleChange}
      className="p-4 rounded-2xl border text-right"
    />

    <button
      type="submit"
      className="bg-green-700 text-white py-4 rounded-2xl col-span-2 hover:bg-green-800 transition"
    >
      إضافة فرصة
    </button>

  </form>
</div>

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

          <div className="bg-slate-100 p-5 rounded-3xl flex flex-col md:flex-row gap-4">

  <input
    type="text"
    placeholder="اسم الفرصة"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
  />

  <input
    type="number"
    placeholder="عدد الساعات"
    value={hours}
    onChange={(e) => setHours(e.target.value)}
    className="p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
  />

  <button
    onClick={() => {
      if (!title || !hours) return;

      const newCampaign = {
        title,
        volunteers: 0,
        hours
      };

      setOpportunities([...opportunities, newCampaign]);

      setTitle("");
      setHours("");
    }}
    className="px-6 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition"
  >
    + إضافة فرصة
  </button>

</div>
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

            {opportunities.map((campaign, index) => (

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