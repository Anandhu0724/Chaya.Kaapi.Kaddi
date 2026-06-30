import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, Users, Phone, User, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../data';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '15-20',
    itemOfInterest: 'all',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request processing
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      guests: '15-20',
      itemOfInterest: 'all',
      message: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md transition-all">
      {/* Backdrop */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-white/20 rounded-[32px] overflow-hidden max-w-lg w-full shadow-2xl z-10 p-6 sm:p-8 transform scale-100 transition-all max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-100 text-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-colors cursor-pointer focus:outline-none"
          aria-label="Close Pre-order Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-widest">
                <Coffee className="w-3.5 h-3.5" />
                <span>Catering & Bulk Orders</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-charcoal-800 tracking-tight leading-none">
                Pre-Order / Bulk Inquiry
              </h3>
              <p className="font-sans text-xs text-charcoal-500 leading-normal">
                Planning a tea party, family get-together, or school event in Mlamala? Let us know 24 hours in advance and we'll bake your selection completely fresh and hot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Your Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  />
                </div>
              </div>

              {/* Phone & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Contact Phone</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94474..."
                      className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Required Date</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-400">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Count & Primary Item */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Order Quantity / Serving Size</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-400">
                      <Users className="w-4 h-4" />
                    </span>
                    <select
                      value={formData.guests}
                      onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all cursor-pointer"
                    >
                      <option value="10-15">10 - 15 portions</option>
                      <option value="15-20">15 - 20 portions</option>
                      <option value="20-35">20 - 35 portions</option>
                      <option value="35-50">35 - 50 portions</option>
                      <option value="50+">50+ portions (Special Event)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Item Of Interest</label>
                  <select
                    value={formData.itemOfInterest}
                    onChange={e => setFormData({ ...formData, itemOfInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all cursor-pointer"
                  >
                    <option value="all">Custom Assortment Platter</option>
                    {MENU_ITEMS.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name} (₹{item.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-600 uppercase tracking-wide">Special Requests / Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., Serve the tea extra ginger-spiced, split order between egg and veg puffs, etc."
                  className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl font-sans text-sm text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-800 font-sans font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer active:scale-98 group"
              >
                <span>Submit Catering Inquiry</span>
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-5 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-charcoal-800 tracking-tight">
                Inquiry Submitted!
              </h3>
              <p className="font-sans text-sm text-charcoal-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. We have received your pre-order request for <strong>{formData.date}</strong> ({formData.guests} portions).
              </p>
            </div>

            <div className="bg-cream-100/80 border border-cream-200/60 p-4.5 rounded-2xl text-left max-w-sm mx-auto space-y-2.5 text-xs">
              <p className="font-sans font-bold text-charcoal-800 uppercase tracking-wide text-center border-b border-cream-200 pb-1.5">
                Next Steps Summary
              </p>
              <p className="font-sans text-charcoal-600">
                1. Our bakery supervisor at Mlamala will review our afternoon griddle plan.
              </p>
              <p className="font-sans text-charcoal-600">
                2. We will call you on <strong className="text-charcoal-800">{formData.phone}</strong> to confirm exact flavors, time, and pricing.
              </p>
              <p className="font-sans text-charcoal-600">
                3. Your batch will be prepared entirely fresh so it is steaming-hot at pickup!
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 text-cream-50 hover:text-charcoal-800 font-sans font-semibold text-xs transition-all duration-300 shadow-sm cursor-pointer"
            >
              Back To Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
