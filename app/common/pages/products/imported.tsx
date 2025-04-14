import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 수입 제품" },
    { name: "description", content: "Supreme CNS가 수입하는 의료 소모품 제품" },
  ];
};

export default function ImportedProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">수입 제품</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS가 수입하는 고품질 의료 소모품들을 소개합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "의료용 붕대",
              description: "고품질 의료용 일회용 붕대",
              image: "/images/products/medical-bandage.jpg",
              features: [
                "항균 처리",
                "통기성 우수",
                "피부 친화적 소재"
              ]
            },
            {
              name: "의료용 깁스",
              description: "고급형 의료용 석고 깁스",
              image: "/images/products/medical-cast.jpg",
              features: [
                "가벼운 무게",
                "강한 내구성",
                "편안한 착용감"
              ]
            },
            {
              name: "허리 보호대",
              description: "의료용 척추 보호대",
              image: "/images/products/back-brace.jpg",
              features: [
                "조절 가능한 지지력",
                "통기성 메쉬 소재",
                "세탁 가능"
              ]
            }
          ].map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-green-900 mb-2">{product.name}</h3>
                  <p className="text-green-800">이미지 준비중</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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