import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | A/S 문의" },
    { name: "description", content: "Supreme CNS의 의료기기 수리 및 기술 지원 서비스" },
  ];
};

export default function ASPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">A/S 문의</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS의 전문 기술진이 의료기기 수리 및 기술 지원을 제공합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">A/S 서비스</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">기술 지원</h3>
                  <p className="text-gray-600">원격 및 현장 기술 지원 서비스</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">수리 서비스</h3>
                  <p className="text-gray-600">고장 진단 및 수리 서비스</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">부품 교체</h3>
                  <p className="text-gray-600">고장 부품 교체 및 정품 부품 공급</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">문의하기</h2>
            <p className="text-gray-600 mb-4">A/S 서비스에 대한 문의사항이 있으시면 아래 연락처로 문의해 주세요.</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-semibold mr-2">전화:</span>
                02-1234-5678
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">이메일:</span>
                support@supremecns.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 