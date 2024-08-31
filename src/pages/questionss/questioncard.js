import React, { useState,useMemo } from 'react';
import { ChevronDown, ChevronUp} from 'lucide-react';


const questionBank = {
    'Web Development': {
      Easy: [
        "What is the difference between HTML and CSS?",
        "Explain the box model in CSS.",
        "What is responsive web design?",
        "What are semantic HTML tags?",
        "Describe the purpose of media queries in CSS."
      ],
      Medium: [
        "Explain the concept of CSS Flexbox.",
        "What is the difference between localStorage and sessionStorage?",
        "Describe the purpose of the 'use strict' directive in JavaScript.",
        "What are Web Workers and how do they work?",
        "Explain the concept of CORS (Cross-Origin Resource Sharing)."
      ],
      Hard: [
        "Describe the Shadow DOM and its use cases.",
        "Explain the concept of server-side rendering and its benefits.",
        "What are Service Workers and how can they be used to create offline experiences?",
        "Describe the concept of Progressive Web Apps (PWAs).",
        "Explain the differences between WebSockets and Server-Sent Events."
      ]
    },
    'Data Structures': {
      Easy: [
        "What is an array and how does it differ from a linked list?",
        "Explain the concept of a stack data structure.",
        "What is a queue and how does it work?",
        "Describe the properties of a binary tree.",
        "What is a hash table and how does it work?"
      ],
      Medium: [
        "Explain the difference between a binary tree and a binary search tree.",
        "What is a heap data structure and what are its applications?",
        "Describe the concept of a trie and its use cases.",
        "What is a graph data structure and how can it be represented?",
        "Explain the concept of a doubly linked list and its advantages."
      ],
      Hard: [
        "Describe the concept of a red-black tree and its self-balancing properties.",
        "What is an AVL tree and how does it maintain balance?",
        "Explain the concept of a B-tree and its applications in databases.",
        "Describe the properties and use cases of a Fibonacci heap.",
        "What is a skip list and how does it achieve O(log n) search complexity?"
      ]
    },
    'React': {
      Easy: [
        "What is JSX in React?",
        "Explain the difference between state and props in React.",
        "What is the purpose of the useState hook?",
        "Describe the component lifecycle in React.",
        "What is the virtual DOM in React?"
      ],
      Medium: [
        "Explain the useEffect hook and its use cases.",
        "What is the Context API in React and when should it be used?",
        "Describe the concept of higher-order components (HOCs) in React.",
        "What are controlled and uncontrolled components in React forms?",
        "Explain the concept of React portals and their use cases."
      ],
      Hard: [
        "Describe the concept of code splitting in React and its benefits.",
        "What is server-side rendering (SSR) in React and how can it be implemented?",
        "Explain the concept of React Fiber and its advantages.",
        "Describe the useReducer hook and how it compares to useState for complex state management.",
        "What are React Hooks rules and why are they important?"
      ]
    },
    'Algorithms': {
      Easy: [
        "Explain the concept of linear search.",
        "What is binary search and when is it useful?",
        "Describe the bubble sort algorithm.",
        "What is the time complexity of insertion sort?",
        "Explain the concept of recursion in algorithms."
      ],
      Medium: [
        "Describe the quicksort algorithm and its average time complexity.",
        "What is the difference between DFS and BFS traversal algorithms?",
        "Explain the concept of dynamic programming and provide an example.",
        "Describe the merge sort algorithm and its time complexity.",
        "What is the Dijkstra's algorithm used for?"
      ],
      Hard: [
        "Explain the A* search algorithm and its heuristic function.",
        "Describe the concept of NP-completeness and give an example of an NP-complete problem.",
        "What is the Knuth-Morris-Pratt (KMP) algorithm used for?",
        "Explain the concept of a minimum spanning tree and describe Kruskal's algorithm.",
        "Describe the Boyer-Moore string search algorithm and its advantages."
      ]
    },
    'System Design': {
      Easy: [
        "What is load balancing and why is it important?",
        "Explain the concept of caching in system design.",
        "What is a CDN (Content Delivery Network) and how does it work?",
        "Describe the difference between SQL and NoSQL databases.",
        "What is horizontal scaling vs vertical scaling?"
      ],
      Medium: [
        "Explain the concept of sharding in databases.",
        "What is the CAP theorem and how does it apply to distributed systems?",
        "Describe the publish-subscribe pattern in system design.",
        "What is the purpose of a message queue in a distributed system?",
        "Explain the concept of eventual consistency in distributed databases."
      ],
      Hard: [
        "Design a distributed key-value store like Amazon's Dynamo.",
        "Explain the architecture of a system like Google's BigTable.",
        "Describe the design considerations for a real-time collaboration system like Google Docs.",
        "What are the key components and challenges in designing a system like Twitter?",
        "Explain the architecture and scalability considerations for a system like Netflix's video streaming service."
      ]
    }
  };
  
  
const generateQuestions = (company, domain, difficulty) => {
    return questionBank[domain][difficulty].map((question, index) => 
      `${company} ${domain} ${difficulty} Q${index + 1}: ${question}`
    );
  };
  
const QuestionCard = ({ company, domain, difficulty }) => {
    const [isOpen, setIsOpen] = useState(false);
    const questions = useMemo(() => generateQuestions(company, domain, difficulty), [company, domain, difficulty]);
  
    const bgColor = {
      Easy: 'bg-green-100',
      Medium: 'bg-yellow-100',
      Hard: 'bg-red-100'
    };
  
    const borderColor = {
      Easy: 'border-green-300',
      Medium: 'border-yellow-300',
      Hard: 'border-red-300'
    };
  
    return (
      <div className={`mb-4 rounded-lg shadow-md overflow-hidden ${bgColor[difficulty]} ${borderColor[difficulty]} border`}>
        <button
          className="w-full text-left p-4 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold">{difficulty}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
          <div className="p-4 bg-white">
            <ul className="list-disc ml-5">
              {questions.map((question, index) => (
                <li key={index} className="mb-2 text-gray-700">{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
export default QuestionCard;  