export default function Rankings() {

  const leaders = [
    {
      name: "محمد الأحمد",
      points: 4200,
      level: "قائد مجتمعي"
    },
    {
      name: "لين خالد",
      points: 3600,
      level: "مؤثر"
    },
    {
      name: "عمر ديب",
      points: 2900,
      level: "نشيط"
    },
    {
      name: "سارة علي",
      points: 2400,
      level: "متطوع فعال"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Header */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm mb-10 text-right">

        <h1 className="text-4xl font-extrabold text-slate-800">
          لوحة المتصدرين
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          أفضل المتطوعين الأكثر نشاطًا داخل المنصة
        </p>

      </div>

      {/* Top 3 */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        {leaders.slice(0, 3).map((user, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] p-8 shadow-sm text-center"
          >

            <div className="text-6xl mb-4">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              {user.name}
            </h2>

            <p className="text-green-700 mt-3 text-xl font-semibold">
              {user.points} نقطة
            </p>

            <span className="inline-block mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              {user.level}
            </span>

          </div>

        ))}

      </div>

      {/* Full Ranking */}
      <div className="bg-white rounded-[30px] p-8 shadow-sm">

        <h2 className="text-3xl font-bold mb-8 text-right">
          الترتيب الكامل
        </h2>

        <div className="space-y-5">

          {leaders.map((user, index) => (

            <div
              key={index}
              className="bg-slate-100 rounded-2xl p-5 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-xl">
                  #{index + 1}
                </div>

                <div className="text-right">

                  <h3 className="text-2xl font-bold text-slate-800">
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

      </div>

    </div>
  );
}