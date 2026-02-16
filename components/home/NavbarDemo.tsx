"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import CallButton from "../ui/call-button";
import ArrowButton from "../ui/arrow-button";
import { navItems } from "@/data/navigation";

// Wrapper pour adapter la variante du bouton selon l'état de la navbar
function NavbarCTA({
  visible,
  isHomePage,
}: {
  visible?: boolean;
  isHomePage?: boolean;
}) {
  // Sur la homepage : toujours yellow
  // Sur les autres pages : black au top, yellow quand scrollé
  const variant = isHomePage || visible ? "yellow" : "black";

  return <ArrowButton size="sm" variant={variant} className="relative z-20" />;
}

export default function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />

        <NavbarCTA />
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-sm text-white/70 transition-colors hover:text-[#FDF567]"
            >
              {item.name}
            </a>
          ))}
          <hr className="w-full border-white/20 my-2" />
          <CallButton size="sm" className="relative z-20" />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
