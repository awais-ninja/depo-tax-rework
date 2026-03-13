'use client';

import Image from 'next/image';
import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ABOUT_TEAM_INTRO, ABOUT_DIRECTOR, ABOUT_SENIOR_TEAM, ABOUT_DEPARTMENT_GROUPS, ABOUT_OTHER_MEMBERS } from './aboutTeamData';

const socialIconClass = 'w-4 h-4 sm:w-5 sm:h-5';

function getDisplayName(member) {
  return member.name || member.title;
}

/** Director — centered spotlight card, stacked layout */
function DirectorSpotlight() {
  return (
    <article className="reveal-item reveal-item-delay-3 flex flex-col items-center text-center max-w-lg mx-auto">
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-brand-navy/5 ring-4 ring-white ring-offset-4 ring-offset-brand-grayLight shadow-xl">
        <Image
          src={ABOUT_DIRECTOR.image}
          alt={ABOUT_DIRECTOR.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
          priority
        />
      </div>
      <p className="mt-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
        {ABOUT_DIRECTOR.title}
      </p>
      <h3 className="mt-1 text-xl sm:text-2xl font-bold text-brand-navy">
        {ABOUT_DIRECTOR.name}
      </h3>
      {ABOUT_DIRECTOR.tags && (
        <p className="mt-1.5 text-xs text-brand-text/60" aria-hidden>
          {ABOUT_DIRECTOR.tags}
        </p>
      )}
      <p className="mt-3 text-sm text-brand-text/85 leading-relaxed">
        {ABOUT_DIRECTOR.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-5" aria-label="Social links">
        {ABOUT_DIRECTOR.social?.instagram && (
          <Link href={ABOUT_DIRECTOR.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-grayLight flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-colors" aria-label="Instagram">
            <FaInstagram className={socialIconClass} />
          </Link>
        )}
        {ABOUT_DIRECTOR.social?.facebook && (
          <Link href={ABOUT_DIRECTOR.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-grayLight flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-colors" aria-label="Facebook">
            <FaFacebookF className={socialIconClass} />
          </Link>
        )}
        {ABOUT_DIRECTOR.social?.linkedin && (
          <Link href={ABOUT_DIRECTOR.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-grayLight flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedinIn className={socialIconClass} />
          </Link>
        )}
        {ABOUT_DIRECTOR.social?.twitter ? (
          <Link href={ABOUT_DIRECTOR.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-grayLight flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-colors" aria-label="Twitter">
            <FaTwitter className={socialIconClass} />
          </Link>
        ) : (
          <span className="w-10 h-10 rounded-full bg-brand-grayLight flex items-center justify-center text-brand-text/40" aria-hidden>
            <FaTwitter className={socialIconClass} />
          </span>
        )}
      </div>
    </article>
  );
}

/** Team member card — horizontal on mobile (avatar + text), vertical on sm+ */
function TeamCard({ member, delayClass, badge }) {
  const displayName = getDisplayName(member);
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-row sm:flex-col items-center sm:text-center rounded-2xl bg-white border border-brand-grayBorder p-4 sm:p-5 shadow-[0_2px_12px_rgba(15,23,42,0.06)] md:hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] md:hover:border-brand-accent/20 md:hover:-translate-y-1.5 transition-all duration-200 min-w-0 gap-4 sm:gap-0 h-full`}
      aria-labelledby={`team-${member.id}-name`}
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden bg-brand-grayLight ring-2 ring-white ring-offset-2 ring-offset-brand-grayLight">
        <Image
          src={member.image}
          alt={displayName}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
        />
        {badge && (
          <span className="absolute -top-0.5 -right-0.5 rounded-full bg-brand-accent w-4 h-4 flex items-center justify-center text-[8px] font-bold text-white">
            H
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0 text-left sm:text-center py-1 sm:py-0 sm:mt-3">
        <h3 id={`team-${member.id}-name`} className="text-sm sm:text-base font-bold text-brand-navy leading-tight truncate sm:line-clamp-2">
          {displayName}
        </h3>
        <p className="text-xs text-brand-text/70 mt-0.5 truncate sm:line-clamp-2">{member.title}</p>
        {member.tags && (
          <p className="text-[11px] text-brand-text/60 mt-1.5 hidden sm:block line-clamp-2" aria-hidden>
            {member.tags}
          </p>
        )}
      </div>
    </article>
  );
}

export default function AboutMeetTheTeam() {
  return (
    <section
      id="meet-the-team"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-brand-grayLight/60"
      aria-labelledby="about-meet-the-team-heading"
    >
      <SectionBackgroundLabel label="OUR TEAM" position="right-top" size="md" />

      <SectionReveal>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <h2
              id="about-meet-the-team-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3"
            >
              <span className="text-[#2b4b6b]">Our </span>
              <span className="text-[#9a0000]">Team</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/80 leading-relaxed">
              {ABOUT_TEAM_INTRO}
            </p>
          </header>

          {/* Director spotlight */}
          <div className="mb-12 sm:mb-16">
            <DirectorSpotlight />
          </div>

          {/* Team grid — one consistent layout, grouped by data */}
          <div className="space-y-8 sm:space-y-10">
            {/* Senior team */}
            <div>
              <h3 className="reveal-item reveal-item-delay-4 text-xs font-bold uppercase tracking-widest text-brand-text/50 mb-4">
                Senior team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
                {ABOUT_SENIOR_TEAM.map((member) => (
                  <TeamCard key={member.id} member={member} delayClass="reveal-item-delay-4" />
                ))}
              </div>
            </div>

            {/* Departments */}
            {ABOUT_DEPARTMENT_GROUPS.map((group) => (
              <div key={group.departmentLabel}>
                <h3 className="reveal-item reveal-item-delay-5 text-xs font-bold uppercase tracking-widest text-brand-text/50 mb-4">
                  {group.departmentLabel}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                  <TeamCard member={group.members[0]} delayClass="reveal-item-delay-5" badge="Head" />
                  <TeamCard member={group.members[1]} delayClass="reveal-item-delay-5" />
                  <TeamCard member={group.members[2]} delayClass="reveal-item-delay-5" />
                </div>
              </div>
            ))}

            {/* Specialists */}
            <div>
              <h3 className="reveal-item reveal-item-delay-6 text-xs font-bold uppercase tracking-widest text-brand-text/50 mb-4">
                Specialists
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                {ABOUT_OTHER_MEMBERS.map((member) => (
                  <TeamCard key={member.id} member={member} delayClass="reveal-item-delay-6" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
