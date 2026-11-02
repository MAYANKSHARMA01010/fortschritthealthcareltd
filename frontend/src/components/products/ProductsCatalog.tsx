"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, type ProductItem } from "@/data/productsData";

const divisionTabs = [
  { id: "all", label: "All Formulations", count: PRODUCTS.length, icon: "grid_view", color: "from-blue-600 to-indigo-600" },
  { id: "General", label: "General Pharma", count: PRODUCTS.filter(p => p.division === "General").length, icon: "medication", color: "from-blue-600 to-sky-600" },
  { id: "Hormones", label: "Hormones & Endocrine", count: PRODUCTS.filter(p => p.division === "Hormones").length, icon: "monitor_heart", color: "from-purple-600 to-indigo-600" },
  { id: "Nutraceuticals", label: "Nutraceuticals & Powders", count: PRODUCTS.filter(p => p.division === "Nutraceuticals").length, icon: "local_pharmacy", color: "from-emerald-600 to-teal-600" },
  { id: "Softgel", label: "Softgel Capsules", count: PRODUCTS.filter(p => p.division === "Softgel").length, icon: "water_drop", color: "from-amber-500 to-sky-500" },
];

const dosageForms = ["All", ...new Set(PRODUCTS.map(product => product.dosageForm))];
const categories = ["All", ...new Set(PRODUCTS.map(product => product.category))];

export default function ProductsCatalog({ initialDivision }: { initialDivision: string }) {
  const [selectedDivision, setSelectedDivision] = useState<string>(initialDivision);
  const [selectedForm, setSelectedForm] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [displayLimit, setDisplayLimit] = useState<number>(24);
  const dosageScrollRef = useRef<HTMLDivElement>(null);

  // Reset displayLimit to 24 whenever any filter criteria changes
  useEffect(() => {
    setDisplayLimit(24);
  }, [selectedDivision, selectedForm, selectedCategory, searchQuery]);

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
        const matchStrengths = product.availableStrengths.some(s => s.toLowerCase().includes(query));
        const matchAlias = product.aliases.some(name => name.toLowerCase().includes(query));
        const matchVariant = product.variants.some(variant =>
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

      {/* Hero Header (Full Screen Viewport Layout - Zero White Space at Bottom) */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#101b3b] pt-28 pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-primary-accent/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-4">
            WHO-GMP Approved Product Portfolio (IP / BP / USP)
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl mx-auto">
            Precision Formulations for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100">
              Global Healthcare Demand
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
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
                <div className="text-white text-xs font-bold">Global Export</div>
                <div className="text-slate-400 text-[11px]">50+ Countries</div>
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
        <div className="w-full mb-10 overflow-x-auto lg:overflow-x-visible no-scrollbar">
          <div className="flex lg:grid lg:grid-cols-5 gap-3 min-w-max lg:min-w-0 w-full py-1">
            {divisionTabs.map((tab) => {
              const isSelected = selectedDivision === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDivision(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold flex-shrink-0 lg:flex-shrink whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary/20 scale-[1.02]"
                      : "bg-white text-slate-600 border border-slate-200/90 hover:border-primary/40 hover:text-primary shadow-sm"
                  }`}
                >
                  <span className="material-icons text-base sm:text-lg flex-shrink-0">{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
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

        {/* Sub-Filters: Search Bar + Dosage Form + Therapeutic Area (Location 1) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md mb-12 flex flex-col gap-6">
          {/* Main Search Input Bar inside Location 1 */}
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
                className="absolute right-4 text-slate-400 hover:text-slate-600 font-bold p-1 rounded-full hover:bg-slate-100 transition-colors"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sub-Filter Controls: Dosage Form & Therapy */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-3 border-t border-slate-100">
            {/* Dosage Form Selector */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                Dosage Form:
              </span>
              <div
                ref={dosageScrollRef}
                onWheel={(e) => {
                  if (e.deltaY !== 0) {
                    e.currentTarget.scrollLeft += e.deltaY;
                  }
                }}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 flex-1 min-w-0"
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
                      className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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
            <div className="flex items-center gap-3 flex-shrink-0 lg:w-64">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                Therapy:
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-primary cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
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
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 border border-sky-100"
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
                  className="bg-white rounded-[2rem] p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                {/* Top Colored Division Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  product.division === 'General' ? 'bg-blue-600' :
                  product.division === 'Hormones' ? 'bg-purple-600' :
                  product.division === 'Nutraceuticals' ? 'bg-emerald-600' : 'bg-amber-500'
                }`} />

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {product.division}
                    </span>

                    {product.regulatoryType && <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                      product.regulatoryType === 'DRUG' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {product.regulatoryType} {product.phRef ? `(${product.phRef})` : ''}
                    </span>}
                  </div>

                  {/* Keep the complete formulation name visible. */}
                  <h3 
                    onClick={() => setActiveModalProduct(product)}
                    className="text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug min-h-[3.25rem] cursor-pointer break-words"
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  {/* Therapy Tag */}
                  <div className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-1 truncate">
                    <span className="material-icons text-sm text-secondary flex-shrink-0">label_important</span>
                    <span className="truncate">{product.category}</span>
                  </div>

                  {/* Composition Block */}
                  <div className="bg-slate-50/80 rounded-2xl p-3.5 mb-4 border border-slate-100 min-h-[110px] flex flex-col justify-start">
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Active Formulation</div>
                    {product.ingredients && product.ingredients.length > 0 ? (
                      <ul className="space-y-1.5 overflow-hidden">
                        {product.ingredients.slice(0, 3).map((ing, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span className="truncate">{ing}</span>
                          </li>
                        ))}
                        {product.ingredients.length > 3 && (
                          <li className="text-[10px] font-extrabold text-secondary tracking-wide pt-0.5">
                            + {product.ingredients.length - 3} more active ingredients
                          </li>
                        )}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-700 font-semibold leading-relaxed line-clamp-3">
                        {product.composition}
                      </p>
                    )}
                  </div>

                  {/* Strengths Badges */}
                  <div className="mb-4 min-h-[52px]">
                    {product.availableStrengths && product.availableStrengths.length > 0 ? (
                      <>
                        <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">{product.ingredients.length > 1 ? 'Strength combinations' : 'Available strengths'}</div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {product.availableStrengths.slice(0, 3).map((st, idx) => (
                            <span key={idx} className="text-[11px] font-extrabold bg-primary/5 text-primary px-2.5 py-0.5 rounded-lg border border-primary/10">
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
                    ) : null}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-4 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold text-slate-400">{product.dosageForm}</span>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-secondary transition-colors flex items-center gap-1.5 shadow-md shadow-primary/10"
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
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-xs hover:bg-secondary transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Interactive Detail & Order Enquiry Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div role="dialog" aria-modal="true" aria-label={activeModalProduct.name} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProduct(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 border border-slate-100 max-h-[90vh] sm:max-h-[85vh] flex flex-col my-auto"
            >
              {/* Header (Fixed at top) */}
              <div className="flex-shrink-0 relative pr-10 mb-4">
                <button
                  aria-label="Close product details"
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-0 right-0 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors font-bold z-20"
                >
                  ✕
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {activeModalProduct.division} Division
                  </span>
                  {activeModalProduct.regulatoryType && <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {activeModalProduct.regulatoryType} {activeModalProduct.phRef ? `(${activeModalProduct.phRef})` : ''}
                  </span>}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-primary mb-2 leading-tight">
                  {activeModalProduct.name}
                </h2>
                <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5 flex-wrap">
                  <span className="material-icons text-base text-secondary">category</span>
                  <span>{activeModalProduct.category}</span>
                  <span>•</span>
                  <span>Form: {activeModalProduct.dosageForm}</span>
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto min-h-0 pr-1.5 space-y-4 my-2">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                  <h4 className="text-[11px] font-extrabold uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="material-icons text-sm text-secondary">science</span>
                    Key Active Ingredients &amp; Formulation
                  </h4>
                  {activeModalProduct.ingredients && activeModalProduct.ingredients.length > 0 ? (
                    <ul className="space-y-2.5">
                      {activeModalProduct.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs">
                          <span className="material-icons text-emerald-500 text-sm mt-0.5 flex-shrink-0">check_circle</span>
                          <span className="leading-snug break-words">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed break-words">
                      {activeModalProduct.composition}
                    </p>
                  )}
                </div>

                <div className="bg-sky-50/60 p-4 sm:p-5 rounded-2xl border border-sky-100">
                  <h4 className="text-[11px] font-bold uppercase text-secondary tracking-wider mb-3">Available formulations &amp; strengths</h4>
                  <div className="space-y-3">
                    {activeModalProduct.variants.map((variant, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-sky-100">
                        <p className="text-xs font-extrabold text-primary mb-1">{variant.label}</p>
                        <p className="text-xs text-slate-700 leading-relaxed">{variant.composition}</p>
                        <details className="mt-2 text-xs text-slate-500">
                          <summary className="cursor-pointer font-semibold">Full source formulation</summary>
                          <p className="mt-2 leading-relaxed">{variant.sourceComposition}</p>
                          <p className="mt-2 text-[10px]">{variant.sourcePdf} · Page {variant.page} · Entry {variant.sourceNumber}</p>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl">
                  <strong>Quality Assurance:</strong> Manufactured under WHO-GMP certified facilities with complete analytical COA support and stability compliance.
                </div>
              </div>

              {/* Footer Action Buttons (Fixed at bottom) */}
              <div className="flex-shrink-0 pt-4 mt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
                <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <span className="material-icons text-xs text-primary">verified</span> WHO-GMP Certified Manufacturing
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/918352810339?text=${encodeURIComponent(`Hello Fortschritt Healthcare, I am inquiring about product: ${activeModalProduct.name} (${activeModalProduct.dosageForm}). Please provide manufacturing & commercial terms.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-3 bg-[#25D366] text-white font-bold rounded-2xl text-xs hover:bg-[#1db954] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    <span className="material-icons text-sm">chat</span> WhatsApp Sales
                  </a>
                  <a
                    href={`mailto:fortschritthealthcareltdsales@gmail.com?subject=Product Inquiry: ${encodeURIComponent(activeModalProduct.name)}`}
                    className="flex-1 sm:flex-none px-5 py-3 bg-primary text-white font-bold rounded-2xl text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    <span className="material-icons text-sm">mail</span> Email Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
