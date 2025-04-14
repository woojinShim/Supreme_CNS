import { MetaFunction } from "react-router";
import { FlickeringGrid } from "../../../components/magicui/flickering-grid";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 홈" },
    { name: "description", content: "Supreme CNS - 의료기기 제조 및 수입 전문 기업" },
  ];
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        <div className="absolute inset-0">
          <FlickeringGrid
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(255, 255, 255)"
            maxOpacity={0.3}
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Supreme CNS</h1>
          <p className="text-2xl mb-8">의료기기 제조 및 수입 전문 기업</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
            문의하기
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">회사 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Supreme CNS는 의료기기 제조 및 수입 전문 기업으로서, 최고의 의료기기를 제공하여 환자의 삶의 질 향상과 의료진의 진료 효율성 증대에 기여하고 있습니다.
              </p>
              <p className="text-lg text-gray-700">
                국제적 품질 기준을 준수하는 제품과 전문적인 기술 지원을 통해 의료 현장의 신뢰를 얻고 있습니다.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">기업 비전</h3>
              <p className="text-gray-700">
                혁신적인 의료기기 솔루션을 통해 더 나은 의료 환경을 만들어가는 선도 기업
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">주요 사업</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "의료기기 제조",
                description: "최신 기술과 엄격한 품질 관리로 제조되는 의료기기"
              },
              {
                title: "수입 의료기기",
                description: "글로벌 우수 의료기기 브랜드의 국내 공급"
              },
              {
                title: "기술 지원",
                description: "설치, 교육, 정기 점검 등 종합적인 기술 지원"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">더 자세한 정보가 필요하신가요?</h2>
          <p className="text-xl mb-8">문의하시면 전문 상담원이 친절하게 안내해드립니다</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors">
            문의하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">Copyright ©2024 SupremeCNS. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                사이트맵
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
