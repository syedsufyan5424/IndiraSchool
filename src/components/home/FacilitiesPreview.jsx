import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FacilityCard from '../ui/FacilityCard';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function FacilitiesPreview() {
  // Show 4 top facilities on the home page preview
  const featuredFacilities = schoolData.facilities.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Campus Environment"
            title="Modern Facilities Supporting Well-Rounded Growth"
            subtitle="Well-ventilated classrooms, practical laboratories, library reading areas, and supervised sports grounds designed for student development."
            align="left"
            className="mb-0"
          />

          <Button
            to="/facilities"
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="self-start md:self-auto flex-shrink-0"
          >
            View All Facilities
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
