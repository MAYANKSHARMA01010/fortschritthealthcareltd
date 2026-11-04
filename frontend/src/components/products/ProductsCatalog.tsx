"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, type ProductItem } from "@/data/productsData";

export interface ParsedIngredient {
  name: string;
  quantity: string;
}

const compositionCache = new Map<string, ParsedIngredient[]>();

export function parseComposition(raw: string): ParsedIngredient[] {
  if (!raw) return [];
  const cached = compositionCache.get(raw);
  if (cached) return cached;

  const result = raw
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((item) => {
      // Split on em-dash (—) or en-dash (–) or space-hyphen-space (" - ")
      const parts = item.split(/\s*[—–]\s*|\s+-\s+/);
      if (parts.length >= 2) {
        return {
          name: parts[0].trim(),
          quantity: parts.slice(1).join(" — ").trim(),
        };
      }
      return { name: item.trim(), quantity: "" };
    });

  compositionCache.set(raw, result);
  return result;
}

export function getVariantBadgeLabel(variant: { label: string; composition: string }, idx: number): string {
  const parsed = parseComposition(variant.composition);
  const quantities = parsed.map((p) => p.quantity).filter(Boolean);
  const strengthStr = quantities.length > 0 && quantities.length <= 4 ? quantities.join(" + ") : "";

  if (variant.label && variant.label !== "Standard formulation") {
    return strengthStr ? `${variant.label} · ${strengthStr}` : variant.label;
  }
  return strengthStr ? `${strengthStr}` : `Formulation ${idx + 1}`;
}

const divisionTabs = [
  { id: "all", label: "All Formulations", count: PRODUCTS.length, icon: "grid_view" },
  { id: "General", label: "General Pharma", count: PRODUCTS.filter((p) => p.division === "General").length, icon: "medication" },
  { id: "Hormones", label: "Hormones & Endocrine", count: PRODUCTS.filter((p) => p.division === "Hormones").length, icon: "monitor_heart" },
  { id: "Nutraceuticals", label: "Nutraceuticals & Powders", count: PRODUCTS.filter((p) => p.division === "Nutraceuticals").length, icon: "local_pharmacy" },
  { id: "Softgel", label: "Softgel Capsules", count: PRODUCTS.filter((p) => p.division === "Softgel").length, icon: "water_drop" },
];

const dosageForms = ["All", ...new Set(PRODUCTS.map((product) => product.dosageForm))];
const categories = ["All", ...new Set(PRODUCTS.map((product) => product.category))];

export default function ProductsCatalog({ initialDivision }: { initialDivision: string }) {
  const [selectedDivision, setSelectedDivision] = useState<string>(initialDivision);
  const [selectedForm, setSelectedForm] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [activeVariantIndex, setActiveVariantIndex] = useState<number>(0);
  const [displayLimit, setDisplayLimit] = useState<number>(24);
  const dosageScrollRef = useRef<HTMLDivElement>(null);

  // Reset displayLimit to 24 whenever filter criteria changes
  useEffect(() => {
    setDisplayLimit(24);
  }, [selectedDivision, selectedForm, selectedCategory, searchQuery]);

  // Reset variant index when modal product changes
  useEffect(() => {
    setActiveVariantIndex(0);
  }, [activeModalProduct]);

  const orderedDosageForms = useMemo(() => {
    if (selectedForm === "All") {
      return dosageForms;
    }
    return [selectedForm, ...dosageForms.filter((f) => f !== selectedForm)];
  }, [selectedForm]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Division Filter
      if (selectedDivision !== "all" && product.division !== selectedDivision) {
        return false;
      }
      // Dosage Form Filter
      if (selectedForm !== "All" && product.dosageForm !== selectedForm) {
        return false;
      }
      // Therapeutic Category Filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchComp = product.composition.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchStrengths = product.availableStrengths.some((s) => s.toLowerCase().includes(query));
        const matchAlias = product.aliases.some((name) => name.toLowerCase().includes(query));
        const matchVariant = product.variants.some((variant) =>
          `${variant.label} ${variant.composition} ${variant.sourceComposition}`.toLowerCase().includes(query)
        );
        return matchName || matchComp || matchCat || matchStrengths || matchAlias || matchVariant;
      }
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedDivision, selectedForm, selectedCategory, searchQuery]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayLimit);
  }, [filteredProducts, displayLimit]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#101b3b] pt-28 pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-primary-accent/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-4"
          >
            WHO-GMP Approved Product Portfolio (IP / BP / USP)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl mx-auto"
          >
            Precision Formulations for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100">
              Global Healthcare Demand
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8"
          >
            {`Explore ${PRODUCTS.length} formulations spanning General Medicines, Hormones & Endocrinology, Nutraceuticals, Sachets, Protein Powders, and Softgel Capsules. Each ingredient combination has its own card, with available strengths listed together.`}
          </motion.p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-5xl mx-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">verified</span>
              <div>
                <div className="text-white text-xs font-bold">{`${PRODUCTS.length} Formulations`}</div>
                <div className="text-slate-400 text-[11px]">WHO-GMP Certified</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">science</span>
              <div>
                <div className="text-white text-xs font-bold">4 Key Divisions</div>
                <div className="text-slate-400 text-[11px]">Pharma &amp; Softgels</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">public</span>
              <div>
                <div className="text-white text-xs font-bold">Global Export Ready</div>
                <div className="text-slate-400 text-[11px]">Dossier &amp; COA Support</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">security</span>
              <div>
                <div className="text-white text-xs font-bold">100% Quality</div>
                <div className="text-slate-400 text-[11px]">COA &amp; Stability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Division Selector Tabs */}
        <div className="w-full mb-10 overflow-x-auto no-scrollbar p-1">
          <div className="flex items-center justify-start 2xl:justify-center gap-2.5 min-w-max mx-auto px-1 py-1">
            {divisionTabs.map((tab) => {
              const isSelected = selectedDivision === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDivision(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold flex-shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary/20 scale-[1.02]"
                      : "bg-white text-slate-600 border border-slate-200/90 hover:border-primary/40 hover:text-primary shadow-sm"
                  }`}
                >
                  <span className="material-icons text-base sm:text-lg flex-shrink-0">{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-black flex-shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub-Filters: Search Bar + Dosage Form + Therapy */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md mb-12 flex flex-col gap-5">
          {/* Main Search Input Bar */}
          <div className="relative w-full flex items-center">
            <span className="material-icons absolute left-4 text-primary text-xl">search</span>
            <input
              type="text"
              placeholder="Search product name, active ingredient or molecule (e.g., Aceclofenac, Progesterone, Telmisartan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-slate-900 placeholder:text-slate-400 text-sm font-semibold outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-slate-400 hover:text-slate-600 font-bold p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sub-Filter Controls: Dosage Form & Therapy */}
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            {/* Dosage Form Selector */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                Dosage Form:
              </span>
              <div
                ref={dosageScrollRef}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-1 min-w-0"
              >
                {orderedDosageForms.map((form) => {
                  const isSelected = selectedForm === form;
                  return (
                    <button
                      key={form}
                      onClick={() => {
                        setSelectedForm(form);
                        dosageScrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                      }}
                      className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-secondary text-white shadow-md shadow-secondary/20"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-100"
                      }`}
                    >
                      {form}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Therapeutic Category Selector */}
            <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto xl:w-72">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                Therapy:
              </span>
              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-3.5 pr-8 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-primary focus:bg-white cursor-pointer appearance-none transition-colors shadow-xs"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "All Therapies" : cat}
                    </option>
                  ))}
                </select>
                <span className="material-icons absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-base">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          <div>
            <h3 className="text-2xl font-black text-primary">
              Formulations ({filteredProducts.length})
            </h3>
            <p className="text-slate-500 text-xs font-medium mt-1">
              Different ingredient combinations are listed separately. Naming and strength variations of the same formulation share a card.
            </p>
          </div>

          {(selectedDivision !== "all" || selectedForm !== "All" || selectedCategory !== "All" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedForm("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 border border-sky-100 cursor-pointer"
            >
              <span className="material-icons text-sm">restart_alt</span> Reset All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-[2rem] p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-[transform,box-shadow] duration-150 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Colored Division Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 ${
                      product.division === "General"
                        ? "bg-blue-600"
                        : product.division === "Hormones"
                        ? "bg-purple-600"
                        : product.division === "Nutraceuticals"
                        ? "bg-emerald-600"
                        : "bg-amber-500"
                    }`}
                  />

                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {product.division}
                      </span>

                      {product.regulatoryType && (
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                            product.regulatoryType === "DRUG"
                              ? "bg-blue-50 text-blue-700 border border-blue-100"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                          }`}
                        >
                          {product.regulatoryType} {product.phRef ? `(${product.phRef})` : ""}
                        </span>
                      )}
                    </div>

                    {/* Keep the complete formulation name visible */}
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug min-h-[3.25rem] cursor-pointer break-words"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Category Tag */}
                    <div className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-1 truncate">
                      <span className="material-icons text-sm text-secondary flex-shrink-0">label_important</span>
                      <span className="truncate">{product.category}</span>
                    </div>

                    {/* Composition Block with Name (Quantity) */}
                    <div className="bg-slate-50/80 rounded-2xl p-3.5 mb-4 border border-slate-100 min-h-[110px] flex flex-col justify-start">
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                        Active Formulation
                      </div>
                      {(() => {
                        const cardParsed = parseComposition(product.variants[0]?.composition || product.composition);
                        if (cardParsed.length > 0) {
                          return (
                            <ul className="space-y-1.5 overflow-hidden">
                              {cardParsed.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold truncate">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                  <span className="truncate">
                                    {item.name}{" "}
                                    {item.quantity ? (
                                      <span className="text-primary font-bold">({item.quantity})</span>
                                    ) : null}
                                  </span>
                                </li>
                              ))}
                              {cardParsed.length > 3 && (
                                <li className="text-[10px] font-extrabold text-secondary tracking-wide pt-0.5">
                                  + {cardParsed.length - 3} more active ingredients
                                </li>
                              )}
                            </ul>
                          );
                        }
                        return (
                          <p className="text-xs text-slate-700 font-semibold leading-relaxed line-clamp-3">
                            {product.composition}
                          </p>
                        );
                      })()}
                    </div>

                    {/* Strengths Badges */}
                    <div className="mb-4 min-h-[52px]">
                      {product.availableStrengths && product.availableStrengths.length > 0 ? (
                        <>
                          <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                            {product.ingredients.length > 1 ? "Strength combinations" : "Available strengths"}
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {product.availableStrengths.slice(0, 3).map((st, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-extrabold bg-primary/5 text-primary px-2.5 py-0.5 rounded-lg border border-primary/10"
                              >
                                {st}
                              </span>
                            ))}
                            {product.availableStrengths.length > 3 && (
                              <span className="text-[10px] font-extrabold text-slate-400 self-center">
                                +{product.availableStrengths.length - 3} more
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                            Formulation Profile
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-extrabold bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-lg border border-secondary/20">
                              {product.ingredients.length > 3
                                ? `Multi-Active Complex (${product.ingredients.length} Actives)`
                                : "Complete Standard Formulation"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-4 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold text-slate-400">{product.dosageForm}</span>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-secondary transition-colors flex items-center gap-1.5 shadow-md shadow-primary/10 cursor-pointer"
                    >
                      Enquire Now
                      <span className="material-icons text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Formulations Button */}
            {filteredProducts.length > visibleProducts.length && (
              <div className="flex flex-col items-center justify-center pt-10 pb-4">
                <button
                  onClick={() => setDisplayLimit((prev) => prev + 24)}
                  className="px-8 py-3.5 bg-primary text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-2.5 cursor-pointer"
                >
                  <span className="material-icons text-base">expand_more</span>
                  <span>Load More Formulations</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-black">
                    Showing {visibleProducts.length} of {filteredProducts.length}
                  </span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-24 text-center bg-white rounded-[2rem] border border-slate-200 border-dashed">
            <span className="material-icons text-6xl text-slate-300 mb-4">search_off</span>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No matching formulations found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              No product matched your selected filter parameters. Reset filters to view all WHO-GMP approved products.
            </p>
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedForm("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-xs hover:bg-secondary transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Interactive Detail & Order Enquiry Modal */}
      <AnimatePresence>
        {activeModalProduct && (() => {
          const currentVariant = activeModalProduct.variants[activeVariantIndex] || activeModalProduct.variants[0];
          const parsedIngredients = parseComposition(currentVariant?.composition || activeModalProduct.composition);

          return (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={activeModalProduct.name}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProduct(null)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl max-w-3xl w-full p-5 sm:p-8 z-10 border border-slate-100 max-h-[92vh] sm:max-h-[88vh] flex flex-col my-auto"
              >
                {/* Header (Fixed at top) */}
                <div className="flex-shrink-0 relative pr-12 mb-3 sm:mb-4">
                  <button
                    aria-label="Close product details"
                    onClick={() => setActiveModalProduct(null)}
                    className="absolute top-0 right-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors font-bold z-20 text-sm cursor-pointer"
                  >
                    ✕
                  </button>

                  <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {activeModalProduct.division} Division
                    </span>
                    {activeModalProduct.regulatoryType && (
                      <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {activeModalProduct.regulatoryType} {activeModalProduct.phRef ? `(${activeModalProduct.phRef})` : ""}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary mb-2 leading-snug">
                    {activeModalProduct.name}
                  </h2>

                  <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5 flex-wrap">
                    <span className="material-icons text-base text-secondary">category</span>
                    <span>{activeModalProduct.category}</span>
                    <span>•</span>
                    <span>Dosage Form: {activeModalProduct.dosageForm}</span>
                  </div>
                </div>

                {/* Scrollable Body Content */}
                <div className="flex-1 overflow-y-auto min-h-0 pr-1 sm:pr-2 space-y-4 my-2">
                  {/* Variant Selector Tabs if multiple variants exist */}
                  {activeModalProduct.variants.length > 1 && (
                    <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200/80">
                      <div className="text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-2.5 flex items-center gap-1.5">
                        <span className="material-icons text-sm text-secondary">tune</span>
                        Select Available Strength / Formulation ({activeModalProduct.variants.length} Options):
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {activeModalProduct.variants.map((v, idx) => {
                          const isSelected = activeVariantIndex === idx;
                          const label = getVariantBadgeLabel(v, idx);
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveVariantIndex(idx)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                                  : "bg-white text-slate-700 border border-slate-200 hover:border-primary/40 hover:text-primary"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Unified Active Ingredients & Quantity Grid */}
                  <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center justify-between gap-2 mb-3.5 pb-2 border-b border-slate-200/60">
                      <h4 className="text-xs font-extrabold uppercase text-primary tracking-wider flex items-center gap-1.5">
                        <span className="material-icons text-sm text-secondary">science</span>
                        Active Composition &amp; Strength ({parsedIngredients.length} {parsedIngredients.length === 1 ? "Ingredient" : "Ingredients"})
                      </h4>
                      {currentVariant?.label && activeModalProduct.variants.length === 1 && currentVariant.label !== "Standard formulation" && (
                        <span className="text-[11px] font-bold text-secondary bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-100">
                          {currentVariant.label}
                        </span>
                      )}
                    </div>

                    {parsedIngredients.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {parsedIngredients.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-3 p-2.5 sm:p-3 bg-white rounded-xl border border-slate-200/70 shadow-xs hover:border-secondary/30 transition-colors"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-semibold text-slate-800 break-words">
                                {item.name}
                              </span>
                            </div>
                            {item.quantity && (
                              <span className="text-xs font-bold text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-lg flex-shrink-0 whitespace-nowrap">
                                ({item.quantity})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed break-words bg-white p-3 rounded-xl border border-slate-100">
                        {activeModalProduct.composition}
                      </p>
                    )}

                    {/* Collapsible Source Dossier & Technical Reference */}
                    {currentVariant?.sourceComposition && (
                      <details className="mt-4 bg-white rounded-xl border border-slate-200/80 p-3 group">
                        <summary className="text-xs font-bold text-slate-500 hover:text-primary cursor-pointer flex items-center justify-between list-none">
                          <span className="flex items-center gap-1.5">
                            <span className="material-icons text-sm text-slate-400">description</span>
                            View Source Technical Dossier &amp; PDF Reference
                          </span>
                          <span className="material-icons text-sm text-slate-400 group-open:rotate-180 transition-transform">
                            expand_more
                          </span>
                        </summary>
                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                          <p className="font-mono text-[11px] bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 break-words leading-relaxed">
                            {currentVariant.sourceComposition}
                          </p>
                          <div className="text-[11px] text-slate-400 flex items-center gap-2">
                            <span className="material-icons text-xs">folder_open</span>
                            <span>
                              {currentVariant.sourcePdf} · Page {currentVariant.page} · Entry #{currentVariant.sourceNumber}
                            </span>
                          </div>
                        </div>
                      </details>
                    )}
                  </div>

                  {/* Quality Assurance Certificate Notice */}
                  <div className="text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 flex items-center gap-2.5">
                    <span className="material-icons text-emerald-600 text-lg flex-shrink-0">verified_user</span>
                    <div>
                      <strong className="text-slate-700">Quality Assurance:</strong> Manufactured under WHO-GMP certified facilities with complete analytical COA support, stability testing compliance, and regulatory documentation.
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons (Fixed at bottom) */}
                <div className="flex-shrink-0 pt-4 mt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
                  <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                    <span className="material-icons text-xs text-primary">verified</span> WHO-GMP Certified Manufacturing
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/918352810339?text=${encodeURIComponent(
                        `Hello Fortschritt Healthcare, I am inquiring about product: ${activeModalProduct.name} (${activeModalProduct.dosageForm})${
                          currentVariant ? ` - ${getVariantBadgeLabel(currentVariant, activeVariantIndex)}` : ""
                        }. Please provide manufacturing & commercial terms.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-3 bg-[#25D366] text-white font-bold rounded-2xl text-xs hover:bg-[#1db954] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 cursor-pointer"
                    >
                      <span className="material-icons text-sm">chat</span> WhatsApp Sales
                    </a>
                    <a
                      href={`mailto:fortschritthealthcareltdsales@gmail.com?subject=Product Inquiry: ${encodeURIComponent(
                        activeModalProduct.name
                      )}`}
                      className="flex-1 sm:flex-none px-5 py-3 bg-primary text-white font-bold rounded-2xl text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                    >
                      <span className="material-icons text-sm">mail</span> Email Inquiry
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
