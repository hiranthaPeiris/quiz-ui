import { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import SidebarLayout from "../components/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoadSigns from "../components/RoadSigns";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const questions = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x200?text=Question+1",
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x200?text=Question+2",
    text: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger", "Giraffe"],
    correctAnswer: "Lion",
  },
];
// Example page components

const LogOut = () => <div className="p-4"><h1 className="text-2xl font-bold mb-4">Log Out</h1><p>Logging out...</p></div>;

// MainPage component
function DashboardHome() {
  const features = [
  {
    name: 'Road Signs',
    description:
      'Learn to recognize and understand all essential road signs to stay safe and confident on the road.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Practice Papers',
    description:
      'Test your knowledge with sample exam papers designed to match the real driving test format.',
    icon: LockClosedIcon,
  },
  {
    name: 'Knowledge Evaluation',
    description:
      'Track your progress with quizzes and assessments to identify areas for improvement.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Road Rules',
    description:
      'Master the key rules of the road to ensure safe and responsible driving at all times.',
    icon: FingerPrintIcon,
  },
]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Priyanka Driving School</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Learn here about your Driving Exaamnation
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Prepare confidently for your driving test with our easy-to-use practice tools. This section helps you understand what to expect during your driving examination, including road rules, traffic signs, and common test questions. Whether you're a first-time driver or brushing up your knowledge, our resources will guide you every step of the way toward earning your license.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];

  useEffect(() => {
    setProgress(((currentQuestion) / totalQuestions) * 100);
  }, [currentQuestion]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prev) => (prev + 1) % totalQuestions);
  };

  return (
    <SidebarLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="road-signs" element={<RoadSigns />} />
          <Route path="papers" element={<QuestionCard
          question={question}
          selectedOption={selectedOption}
          showAnswer={showAnswer}
          onOptionClick={handleOptionClick}
          onNext={handleNext}
          progress={progress}
          />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="logout" element={<LogOut />} />
        </Routes>

        
      </div>
    </div>
    </SidebarLayout>

  );
}


export default QuizPage;
