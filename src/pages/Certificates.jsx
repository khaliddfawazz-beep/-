export default function Certificates() {

  const certificates = [
    {
      title: "حملة تنظيف الشوارع",
      hours: 10,
      organization: "جمعية الأمل",
      date: "2026-01-15"
    },
    {
      title: "تعليم الأطفال",
      hours: 20,
      organization: "مبادرة شباب سوريا",
      date: "2026-02-10"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="bg-white rounded-[30px] p-8 shadow-sm mb-10">

        <h1 className="text-4xl font-extrabold text-slate-800 text-right">
          الشهادات
        </h1>

        <p className="text-slate-500 mt-3 text-right text-lg">
          جميع شهاداتك التطوعية المعتمدة
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {certificates.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] p-8 shadow-sm"
          >

            <div className="flex justify-between items-center mb-6">

              <span className="text-5xl">
                📜
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {item.hours} ساعة
              </span>

            </div>

            <div className="text-right space-y-3">

              <h2 className="text-2xl font-bold text-slate-800">
                {item.title}
              </h2>

              <p className="text-slate-500">
                {item.organization}
              </p>

              <p className="text-slate-400">
                {item.date}
              </p>

            </div>

            <button className="w-full mt-8 py-4 rounded-2xl bg-green-700 text-white hover:bg-green-800 transition">
              تحميل الشهادة PDF
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}