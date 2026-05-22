import { useContext } from "react";
import { OpportunityContext } from "../context/OpportunityContext";
import { VolunteerContext } from "../context/VolunteerContext";
export default function Opportunities() {
  const {
  joinedOpportunities,
  setJoinedOpportunities,
  points,
  setPoints,
  hours,
  setHours
} = useContext(VolunteerContext);


 
  const { opportunities } = useContext(OpportunityContext);
  const handleJoinOpportunity = (opportunity) => {

  setJoinedOpportunities([
    ...joinedOpportunities,
    opportunity
  ]);

  setHours(hours + Number(opportunity.hours));

  setPoints(points + (Number(opportunity.hours) * 10));
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Header */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm mb-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="text-right">
            <h1 className="text-4xl font-extrabold text-slate-800">
              الفرص التطوعية
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              ابحث عن الفرصة المناسبة وابدأ بصناعة الأثر
            </p>
          </div>

          <button className="px-6 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition">
            + إضافة فرصة
          </button>

        </div>

      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-[30px] p-6 shadow-sm mb-10">

        <div className="grid md:grid-cols-3 gap-5">

          <input
            type="text"
            placeholder="ابحث عن فرصة..."
            className="p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
          />

          <select className="p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right">

            <option>كل المجالات</option>
            <option>بيئي</option>
            <option>تعليمي</option>
            <option>إنساني</option>

          </select>

          <select className="p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right">

            <option>كل المدن</option>
            <option>دمشق</option>
            <option>حلب</option>
            <option>حمص</option>

          </select>

        </div>

      </div>

      {/* Opportunities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {opportunities.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            {/* Image */}
            <div className="h-52 bg-gradient-to-r from-green-700 to-emerald-500"></div>

            {/* Content */}
            <div className="p-6 text-right space-y-4">

              <div className="flex justify-between items-center">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                  {item.category}
                </span>

                <span className="text-slate-500 text-sm">
                  ⏱ {item.hours} ساعة
                </span>

              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                {item.title}
              </h2>

              <div className="space-y-2 text-slate-600">

                <p>📍 {item.city}</p>

                <p>🏢 {item.organizer}</p>

              </div>

                <button
                   onClick={() => handleJoinOpportunity(item)}
                    className="w-full py-4 rounded-2xl bg-green-700 text-white hover:bg-green-800 transition font-semibold"
               >
                   انضم الآن
               </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}