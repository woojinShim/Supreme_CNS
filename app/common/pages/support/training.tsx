import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 기술교육" },
    { name: "description", content: "Supreme CNS의 의료기기 사용자 교육 프로그램" },
  ];
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">기술교육</h1>
        <p className="text-lg text-gray-700 mb-12">
          Supreme CNS의 전문 강사진이 의료기기 사용자 교육을 제공합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">교육 프로그램</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">기초 교육</h3>
                  <p className="text-gray-600">의료기기 기본 조작 및 안전 사용법</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">고급 교육</h3>
                  <p className="text-gray-600">고급 기능 활용 및 문제 해결 방법</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">정기 교육</h3>
                  <p className="text-gray-600">신규 기능 및 업데이트 내용 교육</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">문의하기</h2>
            <p className="text-gray-600 mb-4">기술교육 프로그램에 대한 문의사항이 있으시면 아래 연락처로 문의해 주세요.</p>
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