import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center p-6">
      
      <div className="w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-green-700 text-white p-12">
          
          <h1 className="text-5xl font-extrabold mb-6">
            منصة سند
          </h1>

          <p className="text-xl leading-10 text-center opacity-90">
            منصة تطوعية لدعم الشباب السوري
            وربط المتطوعين بالمبادرات المجتمعية والإنسانية.
          </p>

          <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-3">
              لماذا تنضم إلينا؟
            </h3>

            <ul className="space-y-3 text-lg">
              <li>✔ فرص تطوعية متنوعة</li>
              <li>✔ نظام نقاط ومستويات</li>
              <li>✔ شهادات إلكترونية</li>
              <li>✔ تطوير المهارات والخبرات</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 md:p-14">
          
          <div className="flex justify-center mb-10">
            
            <div className="bg-slate-100 rounded-2xl p-2 flex gap-2">
              
              <button
                onClick={() => setIsRegister(false)}
                className={`px-6 py-3 rounded-xl transition ${
                  !isRegister
                    ? "bg-green-700 text-white"
                    : "text-slate-600"
                }`}
              >
                تسجيل الدخول
              </button>

              <button
                onClick={() => setIsRegister(true)}
                className={`px-6 py-3 rounded-xl transition ${
                  isRegister
                    ? "bg-green-700 text-white"
                    : "text-slate-600"
                }`}
              >
                إنشاء حساب
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="text-right mb-8">
            
            <h2 className="text-4xl font-bold text-slate-800 mb-3">
              {isRegister ? "إنشاء حساب جديد" : "مرحبًا بعودتك"}
            </h2>

            <p className="text-slate-500 text-lg">
              {isRegister
                ? "أنشئ حسابك وابدأ رحلتك التطوعية"
                : "سجل دخولك للوصول إلى حسابك"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            
            {isRegister && (
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
              />
            )}

            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
            />

            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
            />

            {isRegister && (
              <>
                <input
                  type="text"
                  placeholder="المدينة"
                  className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
                />

                <select
                  className="w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:border-green-700 text-right"
                >
                  <option>اختر نوع الحساب</option>
                  <option>متطوع</option>
                  <option>صاحب مبادرة</option>
                </select>
              </>
            )}

            {!isRegister && (
              <div className="flex justify-between items-center text-sm">
                
                <a
                  href="/forgot-password"
                  className="text-green-700 hover:underline"
                >
                  نسيت كلمة المرور؟
                </a>

                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" />
                  تذكرني
                </label>
              </div>
            )}

           <div className="space-y-4">

              <Link
                  to="/dashboard"
                  className="block w-full py-4 rounded-2xl bg-green-700 text-white text-lg font-semibold hover:bg-green-800 transition shadow-lg text-center"
              >
                   دخول كمتطوع
              </Link>

              <Link
                  to="/manager"
                  className="block w-full py-4 rounded-2xl bg-slate-800 text-white text-lg font-semibold hover:bg-slate-900 transition shadow-lg text-center"
              >
                 دخول كجهة منظمة
              </Link>

            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-slate-500">
            {isRegister ? (
              <p>
                لديك حساب بالفعل؟{" "}
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-green-700 font-semibold"
                >
                  تسجيل الدخول
                </button>
              </p>
            ) : (
              <p>
                ليس لديك حساب؟{" "}
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-green-700 font-semibold"
                >
                  إنشاء حساب
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}