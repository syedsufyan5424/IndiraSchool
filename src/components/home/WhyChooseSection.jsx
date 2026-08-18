import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { schoolData } from '../../data/schoolData';

export default function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="Foundations for Lifelong Success"
          subtitle="Our core pillars focus on developing character, conceptual strength, discipline, and well-rounded competence in every child."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {schoolData.whyChooseUs.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              iconName={item.icon}
              badge={`Pillar 0${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
