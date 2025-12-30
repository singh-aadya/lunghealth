import { useState } from 'react';
import SplashScreen from './components/screens/SplashScreen';
import LoginScreen from './components/screens/LoginScreen';
import OnboardingScreen from './components/screens/OnboardingScreen';
import HomeDashboard from './components/screens/HomeDashboard';
import BreathingRecording from './components/screens/BreathingRecording';
import ProcessingScreen from './components/screens/ProcessingScreen';
import ResultsScreen from './components/screens/ResultsScreen';
import HistoryScreen from './components/screens/HistoryScreen';
import ReportScreen from './components/screens/ReportScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import EmptyState from './components/screens/EmptyState';
import ErrorState from './components/screens/ErrorState';

export type ScreenType = 
  | 'splash' 
  | 'login' 
  | 'onboarding1' 
  | 'onboarding2' 
  | 'onboarding3'
  | 'home'
  | 'breathing'
  | 'processing'
  | 'results'
  | 'history'
  | 'report'
  | 'profile'
  | 'empty'
  | 'error';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('splash');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNext={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onNext={() => setCurrentScreen('onboarding1')} />;
      case 'onboarding1':
        return (
          <OnboardingScreen
            step={1}
            title="Track Your Lung Health"
            description="Monitor your breathing patterns and get real-time insights into your respiratory health."
            onNext={() => setCurrentScreen('onboarding2')}
          />
        );
      case 'onboarding2':
        return (
          <OnboardingScreen
            step={2}
            title="AI-Powered Analysis"
            description="Our advanced AI analyzes your breathing and provides personalized recommendations."
            onNext={() => setCurrentScreen('onboarding3')}
          />
        );
      case 'onboarding3':
        return (
          <OnboardingScreen
            step={3}
            title="Stay Connected"
            description="Sync with your ESP32 device and track your health data anytime, anywhere."
            onNext={() => setCurrentScreen('home')}
            isLast
          />
        );
      case 'home':
        return (
          <HomeDashboard
            onNavigate={setCurrentScreen}
            onRecordBreathing={() => setCurrentScreen('breathing')}
          />
        );
      case 'breathing':
        return <BreathingRecording onNext={() => setCurrentScreen('processing')} onBack={() => setCurrentScreen('home')} />;
      case 'processing':
        return <ProcessingScreen onNext={() => setCurrentScreen('results')} />;
      case 'results':
        return <ResultsScreen onBack={() => setCurrentScreen('home')} />;
      case 'history':
        return <HistoryScreen onNavigate={setCurrentScreen} />;
      case 'report':
        return <ReportScreen onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      case 'empty':
        return <EmptyState onBack={() => setCurrentScreen('home')} />;
      case 'error':
        return <ErrorState onRetry={() => setCurrentScreen('home')} />;
      default:
        return <SplashScreen onNext={() => setCurrentScreen('login')} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-[393px] h-[852px] bg-[#F8F9FB] overflow-hidden shadow-2xl">
        {renderScreen()}
      </div>
    </div>
  );
}
