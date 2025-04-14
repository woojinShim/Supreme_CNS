import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 신제품" },
    { name: "description", content: "Supreme CNS의 최신 의료기기 제품" },
  ];
};

export default function NewProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">신제품</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS의 최신 의료기기 제품들을 소개합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "스마트 혈압계",
              description: "AI 기반 자동 혈압 측정기",
              image: "/images/products/smart-bp-monitor.jpg",
              features: [
                "AI 알고리즘 기반 측정",
                "스마트폰 연동",
                "데이터 자동 저장"
              ]
            },
            {
              name: "웨어러블 심전계",
              description: "24시간 심장 모니터링 디바이스",
              image: "/images/products/wearable-ecg.jpg",
              features: [
                "실시간 심장 모니터링",
                "비정상 심장 박동 감지",
                "긴급 상황 알림"
              ]
            },
            {
              name: "스마트 인슐린 펌프",
              description: "자동 인슐린 주입 시스템",
              image: "/images/products/smart-insulin-pump.jpg",
              features: [
                "자동 혈당 측정",
                "AI 기반 인슐린 투여",
                "스마트폰 앱 연동"
              ]
            }
          ].map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{product.name}</h3>
                  <p className="text-blue-800">이미지 준비중</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 