import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 고객문의" },
    { name: "description", content: "Supreme CNS 고객문의" },
  ];
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">고객문의</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">문의하기</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    문의 유형
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>제품 문의</option>
                    <option>A/S 문의</option>
                    <option>기술 지원</option>
                    <option>기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    문의 내용
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                    placeholder="문의 내용을 입력해주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">연락처</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">고객지원센터</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">이메일</h3>
                  <p className="text-gray-600">support@supremecns.com</p>
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