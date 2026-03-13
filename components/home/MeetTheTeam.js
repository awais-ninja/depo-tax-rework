'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const INTRO =
  'We have a team of more than 20 people that are serving from three different cities and four different offices. Our network of Accountants is vast and we know how to get things done because we know our credibility and our ability to do things right.';

const DIRECTOR = {
  name: 'Ajmal Aziz Baig',
  title: 'Director',
  image: '/team/ajmal-baig.png',
  social: {
    instagram: 'https://www.instagram.com/ajmal.baig.35/',
    facebook: 'https://www.facebook.com/ajmalbaig74',
    linkedin: 'https://www.linkedin.com/in/ajmal-aziz-60432330/',
    twitter: null,
  },
};

const TEAM_MEMBERS = [
  { name: 'Ali Shan', title: 'Assistant Practice Manager', image: '/team/ali-shan.png' },
  { name: 'Taimoor Azhar', title: 'Operations Manager', image: '/team/taimoor.png' },
];

const iconClass = 'w-4 h-4';

export default function MeetTheTeam() {
  return (
    <section
      className="relative py-14 pb-16 md:pt-18 md:pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden"
      aria-labelledby="meet-the-team-heading"
    >
      <SectionBackgroundLabel label="OUR TEAM" position="left-mid" />
      <SectionAmbient />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: Title, intro, Director card */}
            <div className="text-center lg:text-left">
              <h2
                id="meet-the-team-heading"
                className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
              >
                <span className="text-[#2b4b6b]">Our </span>
                <span className="text-[#9a0000]">Team</span>
              </h2>
              <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {INTRO}
              </p>

              {/* Director / CEO highlight card */}
              <div className="reveal-item reveal-item-delay-3 relative flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
                <div className="w-full sm:max-w-[280px] bg-brand-navy text-white rounded-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-l-2xl px-6 py-6 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                    {DIRECTOR.title}
                  </p>
                  <p className="text-lg font-bold text-white">{DIRECTOR.name}</p>
                  <div className="flex items-center gap-3 mt-4" aria-label="Social links">
                    {DIRECTOR.social.instagram && (
                      <Link
                        href={DIRECTOR.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand-accent transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <FaInstagram className={iconClass} />
                      </Link>
                    )}
                    {DIRECTOR.social.facebook && (
                      <Link
                        href={DIRECTOR.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand-accent transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <FaFacebookF className={iconClass} />
                      </Link>
                    )}
                    {DIRECTOR.social.linkedin && (
                      <Link
                        href={DIRECTOR.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand-accent transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className={iconClass} />
                      </Link>
                    )}
                    {DIRECTOR.social.twitter ? (
                      <Link
                        href={DIRECTOR.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-brand-accent transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <FaTwitter className={iconClass} />
                      </Link>
                    ) : (
                      <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60" aria-hidden>
                        <FaTwitter className={iconClass} />
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative -mt-6 sm:mt-0 sm:-ml-8 flex-shrink-0">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(15,23,42,0.15)] bg-brand-grayLight">
                    <Image
                      src={DIRECTOR.image}
                      alt={DIRECTOR.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Team member circles */}
            <div className="reveal-item reveal-item-delay-4 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-[0_6px_20px_rgba(15,23,42,0.1)] bg-brand-grayLight">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-brand-navy">{member.name}</h3>
                  <p className="text-xs text-brand-text/80 mt-0.5">{member.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* See full team button */}
          <div className="reveal-item reveal-item-delay-5 mt-12 text-center">
            <Link
              href="/about#meet-the-team"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
            >
              See full team
              <span aria-hidden>•</span>
            </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
