import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 정기점검" },
    { name: "description", content: "Supreme CNS의 의료기기 정기 점검 및 유지보수 서비스" },
  ];
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">정기점검</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS의 전문 기술진이 의료기기 정기 점검 및 유지보수를 지원합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">정기점검 서비스</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">기기 상태 점검</h3>
                  <p className="text-gray-600">기기 성능 및 안전성 검사</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">부품 교체</h3>
                  <p className="text-gray-600">마모된 부품 교체 및 소모품 교체</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">소프트웨어 업데이트</h3>
                  <p className="text-gray-600">최신 버전으로 업데이트 및 설정 최적화</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">문의하기</h2>
            <p className="text-gray-600 mb-4">정기점검 서비스에 대한 문의사항이 있으시면 아래 연락처로 문의해 주세요.</p>
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