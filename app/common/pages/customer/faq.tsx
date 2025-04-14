import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supreme CNS | 자주 묻는 질문" },
    { name: "description", content: "Supreme CNS 자주 묻는 질문" },
  ];
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">자주 묻는 질문</h1>
        
        <div className="space-y-6">
          {[
            {
              question: "제품 구매는 어떻게 해야 하나요?",
              answer: "제품 구매는 영업팀(02-1234-5678)으로 문의해 주시면 상담을 도와드립니다. 제품 카탈로그와 견적서를 보내드리며, 필요시 방문 상담도 가능합니다."
            },
            {
              question: "A/S는 어떻게 신청하나요?",
              answer: "A/S는 고객지원센터(02-1234-5678)로 전화하시거나, 웹사이트의 A/S 문의 페이지에서 신청하실 수 있습니다. 24시간 내에 담당자가 연락을 드립니다."
            },
            {
              question: "제품 사용 교육은 필수인가요?",
              answer: "의료기기의 특성상 제품 사용 교육은 필수입니다. 제품 납품 시 기본적인 사용법 교육을 진행하며, 필요시 추가 교육도 제공합니다."
            },
            {
              question: "정기점검 주기는 어떻게 되나요?",
              answer: "제품별로 다르지만, 일반적으로 6개월 또는 1년 주기로 정기점검을 권장합니다. 자세한 내용은 제품 매뉴얼을 참고하시거나 기술지원팀으로 문의해 주세요."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 