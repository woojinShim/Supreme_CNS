import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 제조 제품" },
    { name: "description", content: "Supreme CNS가 직접 제조하는 의료기기 제품" },
  ];
};

export default function ManufacturedProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">제조 제품</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS가 직접 제조하는 최고 품질의 의료기기 제품들을 소개합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "멘탈케어",
              description: "정신건강 관리를 위한 통합 솔루션으로, 스트레스 관리와 정서적 안정을 지원하는 의료기기",
              image: "/images/products/mental-care.jpg",
              features: [
                "실시간 스트레스 모니터링",
                "맞춤형 휴식 프로그램",
                "데이터 기반 정신건강 관리"
              ]
            },
            {
              name: "웨어러블 로봇",
              description: "재활 치료와 일상생활 보조를 위한 첨단 웨어러블 로봇 시스템",
              image: "/images/products/wearable-robot.jpg",
              features: [
                "근력 보조 및 재활 지원",
                "자세 교정 및 균형 훈련",
                "스마트 센서 통합 시스템"
              ]
            },
            {
              name: "홈케어 뇌파장비",
              description: "가정에서도 쉽게 사용할 수 있는 전문가급 뇌파 측정 및 분석 장비",
              image: "/images/products/eeg-equipment.jpg",
              features: [
                "고정밀 뇌파 측정",
                "스마트폰 연동 모니터링",
                "자동 분석 리포트 생성"
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