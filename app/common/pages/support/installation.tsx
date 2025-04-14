import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 제품 설치" },
    { name: "description", content: "Supreme CNS의 의료기기 설치 및 시운전 서비스" },
  ];
};

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">제품 설치</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS의 전문 기술진이 의료기기 설치 및 시운전을 지원합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">설치 서비스</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">사전 현장 조사</h3>
                  <p className="text-gray-600">설치 환경 및 전기, 네트워크 등 인프라 확인</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">전문 설치</h3>
                  <p className="text-gray-600">공인 기술자가 직접 설치 및 초기 설정</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">시운전</h3>
                  <p className="text-gray-600">설치 후 정상 작동 확인 및 사용자 교육</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">문의하기</h2>
            <p className="text-gray-600 mb-4">설치 서비스에 대한 문의사항이 있으시면 아래 연락처로 문의해 주세요.</p>
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