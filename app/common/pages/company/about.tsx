import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 회사소개" },
    { name: "description", content: "Supreme CNS의 역사와 비전" },
  ];
};

export default function CompanyAboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">회사소개</h1>
          <p className="text-xl md:text-2xl mb-8">의료기기 제조 및 수입 전문기업</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">회사 개요</h2>
            <p className="text-lg text-gray-600 mb-6">
              Supreme CNS는 의료기기 제조 및 수입 전문기업으로, 최고의 의료기기와 서비스를 제공하여
              의료 현장의 발전에 기여하고 있습니다.
            </p>
            <p className="text-lg text-gray-600">
              우리는 지속적인 연구개발과 혁신을 통해 의료기기의 품질과 성능을 향상시키고,
              환자와 의료진에게 최적의 솔루션을 제공합니다.
            </p>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">회사 이미지</span>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">비전</h3>
              <p className="text-gray-600">
                의료기기 산업의 선두주자로서, 혁신적인 기술과 서비스로
                글로벌 의료 현장을 선도하는 기업이 되겠습니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">미션</h3>
              <p className="text-gray-600">
                최고의 의료기기와 서비스를 통해 의료진의 진료를 지원하고,
                환자의 삶의 질을 향상시키는 데 기여하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">회사 연혁</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-24 text-right">
              <span className="text-lg font-semibold">2024</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">회사 설립</h3>
              <p className="text-gray-600">Supreme CNS 설립 및 의료기기 사업 시작</p>
            </div>
          </div>
          {/* Add more history items as needed */}
        </div>
      </section>
    </div>
  );
} 