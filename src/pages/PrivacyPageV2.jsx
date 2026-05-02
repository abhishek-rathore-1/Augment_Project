import { legalContent } from "../content/legalContent";
import { pageImages } from "../content/companyContentV2";
import LegalPageV2 from "./LegalPageV2";

function PrivacyPageV2() {
  return (
    <LegalPageV2
      eyebrow="Privacy Policy"
      title="How we handle the information shared through this website."
      description="This page explains what information we may collect, why we use it, and the choices available to you."
      image={pageImages.legalHero}
      sections={legalContent.privacy}
    />
  );
}

export default PrivacyPageV2;
