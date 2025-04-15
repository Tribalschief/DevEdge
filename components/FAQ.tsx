"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // optional icon lib
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = 
    [
        {
          id: "item-0",
          number: "01",
          question: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
          answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.
          
          Id placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum elit velit.`,
        },
        {
          id: "item-1",
          number: "02",
          question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
          answer:
            "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.",
        },
        {
          id: "item-2",
          number: "03",
          question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
          answer:
            "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.",
        },
        {
          id: "item-3",
          number: "04",
          question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
          answer:
            "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.",
        },
        {
          id: "item-4",
          number: "05",
          question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
          answer:
            "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac.",
        },
      ]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<string>("item-0");
return(
    <div>
        
    </div>
)  
}

// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react"; // optional icon lib

// const faqs = [
//   {
//     id: 1,
//     question: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac...",
//   },
//   {
//     id: 2,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 3,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 4,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 5,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
// ];

// export default function FaqAccordion() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggle = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? -1 : index));
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-black">
//         <span className="block">FREQUENTLY</span>
//         <span className="block">
//           ASK <span className="text-purple-600">QUESTIONS</span>
//         </span>
//       </h2>

//       <div className="mt-8 space-y-4">
//         {faqs.map((faq, idx) => (
//           <div
//             key={faq.id}
//             className="rounded-md border border-gray-200 overflow-hidden"
//           >
//             <button
//               onClick={() => toggle(idx)}
//               className={`w-full text-left px-4 py-4 flex justify-between items-center font-medium ${
//                 openIndex === idx ? "bg-purple-600 text-white" : "bg-white text-black"
//               }`}
//             >
//               <div className="flex gap-2">
//                 <span className="font-semibold text-lg">0{faq.id}</span>
//                 <span>{faq.question}</span>
//               </div>
//               <span className="text-xl">
//                 {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
//               </span>
//             </button>
//             {openIndex === idx && faq.answer && (
//               <div className="bg-white px-4 pb-4 text-gray-700 text-sm leading-relaxed">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
