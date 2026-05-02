import { legalContent } from "../content/legalContent";
import { pageImages } from "../content/companyContent";
import LegalPage from "./LegalPage";

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle the information shared through this website."
      description="This page explains what information we may collect, why we use it, and the choices available to you."
      image={pageImages.legalHero}
      sections={legalContent.privacy}
    />
  );
}

export default PrivacyPage;
