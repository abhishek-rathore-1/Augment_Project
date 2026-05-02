import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { contactChannels } from "../../content/companyContentV2";
import { footerGroups } from "../../content/siteNavigation";
import LogoMark from "../ui/LogoMark";

const contactIcons = [Mail, Phone, MapPin];

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-slate-950 text-white">
      <div className="site-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.7fr)_minmax(0,0.75fr)_minmax(0,0.75fr)_minmax(0,1fr)] xl:items-start">
          <div className="xl:pr-8">
            <LogoMark inverted />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Augment Infotech helps businesses design, build, modernise, and support digital products with clearer planning, better engineering discipline, and dependable follow-through.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink to="/contact" className="button-primary">
                Contact Us
                <ArrowUpRight size={16} />
              </NavLink>
              <NavLink
                to="/fire-safety"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                Fire Safety Division
              </NavLink>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {group.title}
              </h3>
              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Contact
            </h3>
            <div className="mt-4 space-y-4">
              {contactChannels.map((channel, index) => {
                const Icon = contactIcons[index];
                const isExternalLocation = channel.title === "Office";

                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={isExternalLocation ? "_blank" : undefined}
                    rel={isExternalLocation ? "noreferrer" : undefined}
                    className="block text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-cyan-300">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {channel.title}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-white">
                          {channel.value}
                        </p>
                        {channel.secondary ? (
                          <p className="mt-1 text-sm text-slate-400">
                            {channel.secondary}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>
            &copy; {year} Augment Infotech. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <NavLink to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
