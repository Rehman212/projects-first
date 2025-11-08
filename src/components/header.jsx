// 🌟 Add "use client" at the top
'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // ✅ Import your initialized i18n instance
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const langRef = useRef(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // ✅ Close dropdowns when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setSubmenuOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setDropdownOpen(false);
        setSubmenuOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // ✅ Language + direction handling
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const isRTL = lng === "ar" || lng === "ur";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.dir = isRTL ? "rtl" : "ltr";
    setLangOpen(false);
    setCurrentLang(lng); // update displayed language immediately
  };

  useEffect(() => {
    const isRTL = i18n.language === "ar" || i18n.language === "ur";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [i18n.language]);

  // ✅ Fix hydration: render language only on client
  const [currentLang, setCurrentLang] = useState(null);
  useEffect(() => {
    setCurrentLang(i18n.language || "en");
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200 dark:border-neutral-700 z-50 text-black">
      {/* 🔹 TOP BAR */}
      <div className="w-full bg-gray-100 dark:bg-[#A31D1D] text-gray-700 dark:text-white text-sm">
        <div className="max-w-[85rem] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-2 gap-2 sm:gap-0">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ info@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-blue-600 transition"><FaFacebookF size={14} /></Link>
            <Link href="#" className="hover:text-sky-500 transition"><FaTwitter size={14} /></Link>
            <Link href="#" className="hover:text-pink-500 transition"><FaInstagram size={14} /></Link>
            <Link href="#" className="hover:text-blue-700 transition"><FaLinkedinIn size={14} /></Link>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVIGATION */}
      <nav className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/assests/images/weblogo.png" alt="" width={140} />
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3" ref={dropdownRef}>
              <Link href="/" className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">{t("homee")}</Link>
              <Link href="#" className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">{t('about')}</Link>

              {/* Dropdown Menu */}
              <div className="relative">
                <button onClick={() => setDropdownOpen(v => !v)} className="px-3 py-2 text-sm flex items-center gap-2 text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">
                  {t('dopdown')}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 w-52 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-lg shadow-lg z-40">
                    <ul className="py-1">
                      <li><Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-700">About</Link></li>
                      <li className="relative">
                        <button onClick={() => setSubmenuOpen(s => !s)} className="w-full text-left px-3 py-2 text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-700">
                          <span>Sub Menu</span>
                          <svg className={`w-4 h-4 transition-transform duration-200 ${submenuOpen ? "rotate-90" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        {submenuOpen && (
                          <div className="absolute left-full top-0 mt-0 ml-1 w-44 bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-md shadow-sm z-50">
                            <ul className="py-1">
                              <li><Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-700">About</Link></li>
                              <li><Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-700">Downloads</Link></li>
                              <li><Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-700">Team</Link></li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="#" className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">{t('account')}</Link>
              <Link href="#" className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">{t('work')}</Link>
              <Link href="#" className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 rounded-lg dark:text-black dark:hover:text-white dark:hover:bg-[#A31D1D]">{t('blog')}</Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/signup" className="px-3 py-1 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 dark:bg-neutral-800 dark:text-white">{t('signup')}</Link>
              <Link href="/login" className="px-3 py-1 text-sm rounded-lg bg-[#A31D1D] text-white">{t('login')}</Link>
            </div>

            {/* 🌍 Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(v => !v)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-800 bg-black border border-gray-200 rounded-md hover:bg-[#A31D1D] dark:bg-black dark:text-white dark:border-neutral-700 transition"
              >
                {/* 🌟 Fix hydration */}
                <span className="hidden sm:inline">{currentLang?.toUpperCase()}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-[#A31D1D] border border-gray-100 dark:border-neutral-700 rounded-md shadow-lg z-40">
                  <ul className="py-1 text-xs">
                    {[
                      { code: "en", label: "🇺🇸 English" },
                      { code: "ar", label: "🇸🇦 Arabic" },
                      { code: "it", label: "🇮🇹 Italiano" },
                      { code: "ur", label: "🇵🇰 Urdu" },
                    ].map(lang => (
                      <li key={lang.code}>
                        <button
                          onClick={() => changeLanguage(lang.code)}
                          className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden" ref={menuRef}>
              <button onClick={() => setMenuOpen(m => !m)} className="p-2 rounded-md border border-gray-200 text-gray-700 dark:text-black dark:border-neutral-700">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 px-4 py-3 space-y-2 animate-slideDown">
            {["Home", "About", "Account", "Work", "Blog"].map(item => (
              <Link key={item} href="#" className="block py-2 text-sm text-gray-800 dark:text-neutral-200 hover:text-blue-600">{item}</Link>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <Link href="/login" className="px-3 py-2 text-center text-sm border border-gray-200 dark:border-neutral-700 rounded-md text-gray-800 dark:text-neutral-200">Sign in</Link>
              <Link href="/signup" className="px-3 py-2 text-center text-sm rounded-md bg-[#A31D1D] text-white hover:bg-red-700">Get started</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
