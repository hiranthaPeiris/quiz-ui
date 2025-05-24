import { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import SidebarLayout from "../components/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoadSigns from "../components/RoadSigns";
import QuestionsPage from "./QuestionsPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import RoadSignPage from "./RoadSignPage";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const questions = {
 'Paper 1': [
 {
 id: 1,
 image: "https://via.placeholder.com/400x200?text=Paper+1+Question+1",
 text: "What does this sign mean?",
 options: ["Stop", "Yield", "Speed Limit", "No Entry"],
 correctAnswer: "Stop",
 },
 {
 id: 2,
 image: "https://via.placeholder.com/400x200?text=Paper+1+Question+2",
 text: "What is the meaning of this sign?",
 options: ["School Zone", "Pedestrian Crossing", "Children Playing", "Bus Stop"],
 correctAnswer: "School Zone",
 },
 ],
 'Paper 2': [
 {
 id: 1,
 image: "https://via.placeholder.com/400x200?text=Paper+2+Question+1",
 text: "What action should you take at this sign?",
 options: ["Turn Left", "Turn Right", "Go Straight", "No U-Turn"],
 correctAnswer: "No U-Turn",
 },
 {
 id: 2,
 image: "https://via.placeholder.com/400x200?text=Paper+2+Question+2",
 text: "This sign indicates:",
 options: ["Hospital Ahead", "First Aid Station", "Gas Station", "Restaurant"],
 correctAnswer: "Hospital Ahead",
 },
 ],
 'Paper 3': [
 {
 id: 1,
 image: "https://via.placeholder.com/400x200?text=Paper+3+Question+1",
 text: "What does this road marking signify?",
 options: ["Lane Ends", "Merge Ahead", "Passing Allowed", "No Passing"],
 correctAnswer: "No Passing",
 },
 {
 id: 2,
 image: "https://via.placeholder.com/400x200?text=Paper+3+Question+2",
 text: "When you see this sign, you should:",
 options: ["Increase Speed", "Maintain Speed", "Reduce Speed", "Prepare to Stop"],
 correctAnswer: "Reduce Speed",
 },
 ],
};
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
  const [selectedPaper, setSelectedPaper] = useState(null);


  return (
    <SidebarLayout>

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="road-signs" element={<RoadSignPage/>} />
          <Route path="papers" element={
            selectedPaper ? (
              <QuestionsPage
                questions={questions[selectedPaper]}
                onExitPaper={() => setSelectedPaper(null)}
              />
            ) : (
              <div className="flex flex-col gap-4">
                <button
                  className="py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold"
                  onClick={() => setSelectedPaper('Paper 1')}
                >
                  Practice Paper 1
                </button>
                <button
                  className="py-3 px-6 bg-green-500 text-white rounded-lg text-xl font-semibold"
                  onClick={() => setSelectedPaper('Paper 2')}
                >
                  Practice Paper 2
                </button>
                <button
                  className="py-3 px-6 bg-purple-500 text-white rounded-lg text-xl font-semibold"
                  onClick={() => setSelectedPaper('Paper 3')}
                >
                  Practice Paper 3
                </button>
              </div>
            )
          } />
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


