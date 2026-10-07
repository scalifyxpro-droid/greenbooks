"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import { MAIN_NAV_LINKS, DROPDOWN_MENUS } from "@/data/navigation";

interface NavbarProps {
  onOpenEnquire?: () => void;
}

export default function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdown(openMobileDropdown === title ? null : title);
  };

  const isNavDark = !isHome || isScrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 px-6 md:px-12 lg:px-20 ${
          isNavDark
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Green Books Logo */}
          <Link href="/" className="flex items-center py-1 group">
            <div className="relative h-12 md:h-14 w-auto flex items-center">
              <Image
                src={isNavDark ? "/green-books-logo-transparent.png" : "/green-books-logo-white.png"}
                alt="Green Books Accounting and Tax Services"
                width={180}
                height={55}
                priority
                className="h-11 md:h-13 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col items-end">
            {/* Top Quick Links */}
            <ul className="flex items-center space-x-1 text-sm mb-1">
              {MAIN_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-3 py-1 text-xs md:text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive
                          ? isNavDark
                            ? "text-[#00A82B] font-semibold border-b-2 border-[#00A82B]"
                            : "text-white font-semibold border-b-2 border-[#00A82B]"
                          : isNavDark
                          ? "text-gray-700 hover:text-[#00A82B] hover:bg-gray-100/60"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Bottom Service Megamenus & CTA */}
            <div className="flex items-center space-x-1 text-sm">
              {DROPDOWN_MENUS.map((menu) => (
                <div key={menu.title} className="relative group py-2">
                  <button
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-md transition-colors ${
                      isNavDark
                        ? "text-gray-800 group-hover:text-[#00A82B] group-hover:bg-green-50/50"
                        : "text-white group-hover:text-white group-hover:bg-white/10"
                    }`}
                  >
                    <span>{menu.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-[#00A82B]" />
                  </button>

                  {/* Dropdown Menu */}
                  {menu.type === "megamenu" && menu.groups ? (
                    <div
                      className="absolute hidden group-hover:block top-full pt-2 left-1/2 -translate-x-1/2 z-50"
                      style={{ width: menu.title === "Taxation" ? "920px" : menu.width ? menu.width.replace("w-[", "").replace("]", "") : "600px" }}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 text-gray-800 ring-1 ring-black/5">
                        <div
                          className={`grid gap-6 ${
                            menu.groups.length === 3
                              ? "grid-cols-3"
                              : menu.groups.length === 2
                              ? "grid-cols-2"
                              : "grid-cols-1"
                          }`}
                        >
                          {menu.groups.map((group) => (
                            <div key={group.heading} className="space-y-3">
                              <h4 className="text-xs font-bold text-[#2E3880] border-b border-gray-100 pb-2 tracking-wider uppercase">
                                {group.heading}
                              </h4>
                              <div className="flex flex-col space-y-1">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-xs text-gray-600 hover:text-[#00A82B] hover:bg-green-50/60 px-2.5 py-1.5 rounded-lg transition-all duration-150 block font-normal"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : menu.items ? (
                    <div className="absolute hidden group-hover:block top-full pt-2 left-0 w-64 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 text-gray-800 ring-1 ring-black/5">
                        <div className="flex flex-col space-y-1">
                          {menu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="text-xs text-gray-700 hover:text-[#00A82B] hover:bg-green-50/60 px-3 py-2 rounded-lg transition-colors block font-normal"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}

              {/* Enquire Now CTA Button */}
              <Link
                href="/contact"
                onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
                className="ml-3 bg-[#00A82B] hover:bg-[#008A22] text-white px-5 py-2.5 rounded-xl font-semibold text-xs md:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              onClick={onOpenEnquire ? (e) => { e.preventDefault(); onOpenEnquire(); } : undefined}
              className="bg-[#00A82B] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors ${
                isNavDark ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 bg-white z-50 overflow-y-auto px-6 py-6 border-t shadow-2xl flex flex-col justify-between">
          <div className="space-y-4">
            {/* Main Links */}
            <div className="grid grid-cols-2 gap-2 pb-4 border-b">
              {MAIN_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-gray-800 rounded-lg hover:bg-green-50 hover:text-[#00A82B]"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Dropdown Groups */}
            <div className="space-y-2">
              {DROPDOWN_MENUS.map((menu) => (
                <div key={menu.title} className="border-b pb-2">
                  <button
                    onClick={() => toggleMobileDropdown(menu.title)}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#2E3880]"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobileDropdown === menu.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === menu.title && (
                    <div className="pl-3 py-2 space-y-3 bg-gray-50 rounded-xl">
                      {menu.type === "megamenu" && menu.groups ? (
                        menu.groups.map((grp) => (
                          <div key={grp.heading} className="space-y-1">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                              {grp.heading}
                            </p>
                            <div className="flex flex-col space-y-1 pl-2">
                              {grp.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-xs text-gray-700 py-1 hover:text-[#00A82B]"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : menu.items ? (
                        <div className="flex flex-col space-y-1">
                          {menu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-gray-700 py-1 hover:text-[#00A82B]"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Footer Action */}
          <div className="pt-6 border-t mt-6 space-y-3">
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquire) onOpenEnquire();
              }}
              className="w-full bg-[#00A82B] text-white py-3 rounded-xl font-bold text-center block shadow-md"
            >
              Enquire Now
            </Link>
            <div className="flex items-center justify-between text-xs text-gray-500 px-2">
              <a href="tel:+971565568571" className="flex items-center gap-1 hover:text-[#00A82B]">
                <Phone className="w-3.5 h-3.5" /> +971 56 556 8571
              </a>
              <a href="mailto:info@greenbooks.ae" className="flex items-center gap-1 hover:text-[#00A82B]">
                <Mail className="w-3.5 h-3.5" /> info@greenbooks.ae
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
