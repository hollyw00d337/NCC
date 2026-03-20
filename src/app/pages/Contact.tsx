import { Mail, MapPin, Phone, Send, Clock, CheckCircle, HardHat, Award, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { projectId, publicAnonKey } from "/utils/supabase/info";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-71c1c944/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error("Failed to submit");
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Estimate</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
            Serving Fort Collins, Greeley, Loveland, Walden &amp; Steamboat Springs, CO — locally owned and operated for 30+ years.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-secondary/20 border border-secondary/40 px-4 py-2 rounded-sm">
              <HardHat className="h-4 w-4 text-secondary" />
              <span className="text-secondary text-xs font-black uppercase tracking-widest">OSHA 30 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-sm">
              <Award className="h-4 w-4 text-white" />
              <span className="text-white text-xs font-black uppercase tracking-widest">BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-sm">
              <ShieldCheck className="h-4 w-4 text-white" />
              <span className="text-white text-xs font-black uppercase tracking-widest">Fully Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Let's Discuss Your Project</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Whether you need a roof repair, a full kitchen remodel, or a custom home build, our team is ready to provide a fair, transparent estimate. We're locally owned, OSHA 30 certified, and BBB accredited.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Service Areas</h3>
                  <p className="text-slate-600">
                    Fort Collins · Greeley · Loveland<br />
                    <span className="font-semibold">Northern Colorado</span><br />
                    <span className="text-slate-500 text-sm">+ Mountain communities: Walden, CO &amp; Steamboat Springs, CO</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Phone</h3>
                  <p className="text-slate-600 mb-1">Main: (970) 682-5555</p>
                  <p className="text-slate-500 text-sm">Call or text for a free estimate</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Email</h3>
                  <p className="text-slate-600">office@ncc-build.com</p>
                  <p className="text-slate-600">bids@ncc-build.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Business Hours</h3>
                  <p className="text-slate-600">Mon – Fri: 7:00 AM – 6:00 PM</p>
                  <p className="text-slate-600">Sat: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-slate-900 rounded-xl p-8">
              <p className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Why Choose NCC LLC</p>
              <div className="space-y-3">
                {[
                  "Locally & Owner-Operated — We live here too",
                  "BBB Accredited — Trusted, verified business",
                  "OSHA 30 Certified — Safety on every job site",
                  "Fully Licensed & Insured — Zero risk to you",
                  "Fair & Transparent Pricing — No surprises",
                  "30+ Years Combined Experience",
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-2">Request a Free Estimate</h3>
            <p className="text-slate-500 text-sm mb-6">OSHA 30 Certified &amp; BBB Accredited – Safety First, Quality Always.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Phone is required" })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                    placeholder="(970) 555-0000"
                  />
                  {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Needed</label>
                <select
                  id="service"
                  {...register("service", { required: "Please select a service" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.service ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white`}
                >
                  <option value="">Select a service...</option>
                  <option value="roofing-repair">Roofing Repair</option>
                  <option value="roofing-replacement">Roofing Replacement</option>
                  <option value="storm-damage">Storm & Hail Damage Repair</option>
                  <option value="kitchen-remodel">Kitchen Remodeling</option>
                  <option value="bathroom-remodel">Bathroom Remodeling</option>
                  <option value="basement-finishing">Basement Finishing</option>
                  <option value="decks-outdoor">Decks & Outdoor Living</option>
                  <option value="siding-gutters">Siding & Gutters</option>
                  <option value="home-addition">Home Additions / Structural Work</option>
                  <option value="painting">Interior & Exterior Painting</option>
                  <option value="flooring-tile">Flooring & Tile</option>
                  <option value="windows-doors">Windows & Doors</option>
                  <option value="concrete">Concrete Work</option>
                  <option value="custom-home">Custom Home Building</option>
                  <option value="other">Other / Not Listed</option>
                </select>
                {errors.service && <span className="text-red-500 text-xs">{errors.service.message}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none`}
                  placeholder="Describe your project, location (city), and any specific details..."
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Get My Free Estimate"} {!isSubmitting && <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}