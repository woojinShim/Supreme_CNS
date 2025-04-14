import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 인증현황" },
    { name: "description", content: "Supreme CNS의 국내외 인증 및 품질관리 현황" },
  ];
};

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">인증현황</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">국내 인증</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">의료기기 제조업 허가</h3>
                  <p className="text-gray-600">식품의약품안전처</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">ISO 13485</h3>
                  <p className="text-gray-600">의료기기 품질경영시스템 인증</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">ISO 9001</h3>
                  <p className="text-gray-600">품질경영시스템 인증</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">해외 인증</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">CE 마크</h3>
                  <p className="text-gray-600">유럽 연합 의료기기 인증</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">FDA 등록</h3>
                  <p className="text-gray-600">미국 식품의약국 등록</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <div>
                  <h3 className="font-semibold">PMDA</h3>
                  <p className="text-gray-600">일본 의약품의료기기종합기구 인증</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 