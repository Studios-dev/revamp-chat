import React, { useState } from 'react';
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  CalendarIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline';
import ChatTab from './collaboration/ChatTab';
import DocsTab from './collaboration/DocsTab';
import WhiteboardingTab from './collaboration/WhiteboardingTab';
import SchedulingTab from './collaboration/SchedulingTab';
import IntegrationsTab from './collaboration/IntegrationsTab';
import { Button } from '../../ui/button'; // Assuming we want to use the refined button for tabs if suitable, but tabs are specific style. Retaining custom style for now or adapting.
import Glass from '../../ui/glass';

const tabs = [
  { id: 'chat', label: 'Chat', icon: ChatBubbleLeftRightIcon, component: ChatTab },
  { id: 'docs', label: 'Docs', icon: DocumentTextIcon, component: DocsTab },
  { id: 'whiteboarding', label: 'Whiteboarding', icon: PencilSquareIcon, component: WhiteboardingTab },
  { id: 'scheduling', label: 'Scheduling', icon: CalendarIcon, component: SchedulingTab },
  { id: 'integrations', label: 'Integrations', icon: SquaresPlusIcon, component: IntegrationsTab },
];

export default function CollaborationSection() {
  const [activeTab, setActiveTab] = useState('chat');

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || ChatTab;

  return (
    <section className="flex flex-col items-center gap-8 py-10 px-4 md:px-0 text-white">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Collaborate like never before</h2>
        <p className="text-white/70 text-lg">
          Revamp brings all the tools your team uses together, connecting everything at your fingertips.
        </p>
      </div>

      <Glass className="w-full max-w-5xl overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col group" border>

        {/* Navbar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-fit max-w-[95%]">
          <Glass className="p-1.5 flex gap-1 overflow-x-auto scrolbar-hide rounded-full" border>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap
                    ${isActive
                      ? 'bg-[#276E85] text-white shadow-sm ring-1 ring-[#7CCCCE]/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </Glass>
        </div>

        {/* Content */}
        <div className="relative grow w-full p-1 pt-24 flex flex-col">
          <ActiveComponent />
        </div>
      </Glass>
    </section>
  );
}
