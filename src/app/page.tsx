import {
  getProfile,
  getProjects,
  getFocusAreas,
  getSkills,
  getCertifications,
  getAbout,
  getExperience,
  getEducation,
} from "@/lib/content";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CurrentFocus from "@/components/sections/CurrentFocus";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import AboutMe from "@/components/sections/AboutMe";
import EducationExperience from "@/components/sections/EducationExperience";
import Contact from "@/components/sections/Contact";

export default async function Home() {
  // Load all content at build time. getProfile, getSkills,
  // getCertifications, and getResources are synchronous; the rest are async.
  const [
    projects,
    focusAreas,
    about,
    experience,
    education,
  ] = await Promise.all([
    getProjects(),
    getFocusAreas(),
    getAbout(),
    getExperience(),
    getEducation(),
  ]);

  const profile = getProfile();
  const skills = getSkills();
  const certifications = getCertifications();

  return (
    <>
      <NavBar name={profile.name} />

      <main id="main" tabIndex={-1}>
        <Hero profile={profile} />
        <AboutMe
          body={about.body}
          profileImage={profile.profileImage}
          name={profile.name}
        />
        <FeaturedProjects projects={projects} />
        <Skills categories={skills.categories} />
        {certifications.certifications.length > 0 && (
          <Certifications certifications={certifications.certifications} />
        )}
        <EducationExperience experience={experience} education={education} />
        <CurrentFocus
          focusAreas={focusAreas}
          knowledgeExchangeNote={profile.knowledgeExchangeNote}
        />
        <Contact
          contactLink={profile.contactLink}
          contactLinkLabel={profile.contactLinkLabel}
          githubUrl={profile.githubUrl}
          linkedinUrl={profile.linkedinUrl}
          email={profile.email}
        />
      </main>

      <Footer
        name={profile.name}
        githubUrl={profile.githubUrl}
        linkedinUrl={profile.linkedinUrl}
      />
    </>
  );
}
