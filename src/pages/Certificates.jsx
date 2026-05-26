import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Certificates() {

  const generatePDF = () => {

    const input = document.getElementById("certificate");

    html2canvas(input).then((canvas) => {

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("landscape", "px", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        {/* Certificate */}
        <div
          id="certificate"
          className="bg-white p-16 rounded-[40px] shadow-xl text-center border-[12px] border-green-700"
        >

          <h1 className="text-5xl font-extrabold text-green-700 mb-8">
            شهادة تطوع
          </h1>

          <p className="text-2xl text-slate-600 mb-10">
            تشهد منصة سند بأن
          </p>

          <h2 className="text-6xl font-bold text-slate-800 mb-10">
            محمد الأحمد
          </h2>

          <p className="text-2xl text-slate-600 leading-10 max-w-3xl mx-auto">
            قد أكمل بنجاح مشاركته في الفرصة التطوعية
            وساهم في خدمة المجتمع والعمل الإنساني.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-slate-100 p-6 rounded-3xl">
              <h3 className="text-xl text-slate-500 mb-3">
                عدد الساعات
              </h3>

              <p className="text-4xl font-bold text-green-700">
                20
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-3xl">
              <h3 className="text-xl text-slate-500 mb-3">
                اسم الحملة
              </h3>

              <p className="text-2xl font-bold text-slate-800">
                تعليم الأطفال
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-3xl">
              <h3 className="text-xl text-slate-500 mb-3">
                التاريخ
              </h3>

              <p className="text-2xl font-bold text-slate-800">
                2026
              </p>
            </div>

          </div>

          <div className="mt-20">

            <h3 className="text-3xl font-bold text-green-700">
              منصة سند للعمل التطوعي
            </h3>

          </div>

        </div>

        {/* Download Button */}
        <div className="text-center mt-10">

          <button
            onClick={generatePDF}
            className="px-10 py-5 bg-green-700 text-white rounded-2xl text-xl hover:bg-green-800 transition shadow-lg"
          >
            تحميل الشهادة PDF
          </button>

        </div>

      </div>

    </div>
  );
}