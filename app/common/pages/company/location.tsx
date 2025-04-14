import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 오시는 길" },
    { name: "description", content: "Supreme CNS 위치 및 연락처" },
  ];
};

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">오시는 길</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">회사 위치</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                서울특별시 강남구 테헤란로 123<br />
                Supreme CNS 빌딩 5층
              </p>
              <div className="h-64 bg-gray-200 rounded-lg mb-4">
                {/* 지도 이미지 또는 지도 컴포넌트가 들어갈 자리 */}
                <div className="flex items-center justify-center h-full text-gray-500">
                  지도 준비중
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">연락처</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">대표전화</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">팩스</h3>
                  <p className="text-gray-600">02-1234-5679</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">이메일</h3>
                  <p className="text-gray-600">info@supremecns.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">영업시간</h3>
                  <p className="text-gray-600">
                    평일: 09:00 - 18:00<br />
                    토요일: 09:00 - 13:00<br />
                    일요일 및 공휴일 휴무
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 