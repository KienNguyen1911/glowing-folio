"use client"

import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Extras } from '@/components/sections/extras';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { SiteHeader } from '@/components/site-header';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
      <>
        <NextSeo
          title="Nguyễn Đồng Kiên | Portfolio | PHP & VueJS Developer"
          description="Portfolio of Nguyễn Đồng Kiên - PHP & VueJS Developer. Building scalable backends & creative UIs. Open to new opportunities."
          canonical="https://yourdomain.com"
          openGraph={{
            url: 'https://yourdomain.com',
            title: 'Nguyễn Đồng Kiên | Portfolio',
            description: 'Portfolio of Nguyễn Đồng Kiên - PHP & VueJS Developer. Building scalable backends & creative UIs.',
            images: [
              {
                url: 'https://yourdomain.com/avatar.png',
                width: 400,
                height: 400,
                alt: "Kien's Avatar",
              },
            ],
            site_name: 'Nguyễn Đồng Kiên Portfolio',
          }}
          twitter={{
            handle: '@yourhandle',
            site: '@yourhandle',
            cardType: 'summary_large_image',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'Nguyễn Đồng Kiên, PHP Developer, VueJS Developer, Portfolio, Backend, Frontend, Web Developer, Hanoi',
            },
          ]}
        />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Extras />
            <Contact />
          </main>
          <SiteHeader />
        </div>
      </>
    );
}
