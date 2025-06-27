import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../datas/Diploma/index';

// Import all section components
import HeroSection from './components/HeroSection.jsx';
import BreadcrumbSection from './components/BreadcrumbSection.jsx';
import OverviewSection from './components/OverviewSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProgramOverviewTabs from './components/ProgramOverviewTabs.jsx';
import CareerPathwaysSection from './components/CareerPathwaysSection.jsx';
import InstructorSection from './components/InstructorSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import FAQsSection from './components/FAQsSection.jsx';
import RelatedCoursesCarousel from './components/RelatedCoursesCarousel.jsx';

// Import animation styles for global use
import { animationStyles } from './components/animations';

const DiplomaPage = () => {
  const { course } = useParams(); // Get the course parameter from the route
  const courseData = courses[course]; // Dynamically fetch the course data

  if (!courseData) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  // Define course categories for decoration variations
  const isCulinary = course === 'DiplomaInFoodPreparationCulinaryArtsLevel2' ||
    course === 'AdvanceDiplomaInCulinaryArtsAndSupervisionLevel3';

  const isPatisserie = course === 'DiplomaInFoodPreparationCulinaryArtsPatisserieLevel2' ||
    course === 'DiplomaInProfessionalPatisserieAndConfectionaryLevel3' ||
    course === 'IVQCertificateInProfessionalPatisserieAndConfectionary';

  const isBarista = course === 'InternationalAwardInBaristaSkills';

  const { instructorData, testimonials = [], faqs = [] } = courseData; // Provide default values

  return (
    <div className="bg-gray-100  overflow-hidden">
      {/* Global animation styles */}
      <style jsx="true" global="true">{animationStyles}</style>

      {/* Hero Section */}
      <HeroSection
        frontImage={courseData.frontImage}
        title={courseData.title}
        isCulinary={isCulinary}
        isPatisserie={isPatisserie}
        isBarista={isBarista}
      />

      {/* Breadcrumb Section */}
      <BreadcrumbSection
        title={courseData.title}
        isCulinary={isCulinary}
        isPatisserie={isPatisserie}
        isBarista={isBarista}
      />

      {/* Spacer */}
      <div className='p-4'></div>

      {/* Course Overview */}
      <OverviewSection
        title={courseData.title}
        overview={courseData.overview}
        additionalDetails={courseData.additionalDetails}
      />

      {/* About Section */}
      <AboutSection
        aboutContent={courseData.aboutContent}
        aboutImages={courseData.aboutImages}
        isCulinary={isCulinary}
        isPatisserie={isPatisserie}
        isBarista={isBarista}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Program Overview Tabs */}
        <ProgramOverviewTabs
          programOverview={courseData.programOverview}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />

        {/* Career Pathways */}
        <CareerPathwaysSection
          careerPathways={courseData.careerPathways}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />

        {/* Instructor Section */}
        <InstructorSection
          instructorData={instructorData}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={testimonials}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />


        {/* FAQs Section */}
        <FAQsSection
          faqs={faqs}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />

        {/* Related Courses */}
        <RelatedCoursesCarousel
          courseData={courseData}
          courses={courses}
          isCulinary={isCulinary}
          isPatisserie={isPatisserie}
          isBarista={isBarista}
        />
      </div>

    </div>
  );
};

export default DiplomaPage;