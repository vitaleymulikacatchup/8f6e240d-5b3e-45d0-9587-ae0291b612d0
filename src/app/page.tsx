"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={50}
          buttonText="Buy BRR"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to Brainrot Rabbits Coin"
          subtitle="Join the fun and be part of our community!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="Connect with Us"
          descriptions={[
            "Follow us on social media",
            "Join our community",
            "Stay updated on our journey",
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy BRR"
          steps={[
            { title: "Step 1", description: "Open your crypto wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Find our token on the exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your purchase!", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Check out our token distribution and pricing!"
          tokenData={[
            { value: "50%", description: "Liquidity Pool" },
            { value: "25%", description: "Development" },
            { value: "15%", description: "Marketing" },
            { value: "10%", description: "Community Rewards" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Brainrot Rabbits Logo"
          logoText="Brainrot Rabbits Coin"
          className="border-t border-gray-200"
        />
      </div>
    </SiteThemeProvider>
  );
}