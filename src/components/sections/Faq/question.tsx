import { BiChevronDown } from "react-icons/bi";

interface QuestionProps {
  question: {
    question: string;
    answer: string;
  };
  expanded: boolean;
  setExpanded: (index: number) => void;
  index: number;
}

function Question({
  question,
  expanded,
  setExpanded,
  index,
}: QuestionProps) {
  return (
    <div
      className={`duration-600 ease-cubic-bezier(.59,0,.06,1) w-full rounded-lg border bg-gray-50 transition-all ${
        expanded ? "py-4" : ""
      }`}
    >
      <div
        className="FAQ-question-header flex cursor-pointer items-center justify-between gap-3 p-5"
        onClick={() => setExpanded(expanded ? -1 : index)}
      >
        <p
          className={`font-bold text-gray-900 ${
            expanded
              ? "visible h-auto translate-y-0 transform opacity-100 "
              : ""
          }`}
        >
          {question.question}
        </p>
        <span className={expanded ? "rotate-180" : ""}>
          <BiChevronDown />
        </span>
      </div>
      <div className={`w-full ${expanded ? "px-5" : ""}`}>
        <p
          className={` ${
            expanded
              ? "visible h-auto translate-y-0 transform opacity-100"
              : "invisible h-0 font-medium opacity-0 "
          }`}
        >
          {question.answer}
        </p>
      </div>
    </div>
  );
}

export default Question;
