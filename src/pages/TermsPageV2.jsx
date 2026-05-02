import { legalContent } from "../content/legalContent";
import { pageImages } from "../content/companyContentV2";
import LegalPageV2 from "./LegalPageV2";

function TermsPageV2() {
  return (
    <LegalPageV2
      eyebrow="Terms of Service"
      title="The terms that apply when using this website and its public content."
      description="These terms describe permitted use, content ownership, and the general limits that apply to the information presented here."
      image={pageImages.legalHero}
      sections={legalContent.terms}
    />
  );
}

export default TermsPageV2;
