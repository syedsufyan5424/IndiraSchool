import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import NewsCard from '../ui/NewsCard';
import Button from '../ui/Button';
import { schoolData } from '../../data/schoolData';

export default function NewsPreview() {
  const latestNotices = schoolData.newsAndEvents.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Notices & Happenings"
            title="Latest News, Circulars & School Events"
            subtitle="Stay informed with official circulars, event schedules, and academic announcements from Indira School."
            align="left"
            className="mb-0"
          />

          <Button
            to="/news"
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="self-start md:self-auto flex-shrink-0"
          >
            View All Circulars
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNotices.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
