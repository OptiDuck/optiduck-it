const localUrl = "http://localhost:3000";

export const siteConfig = {
  name: "OptiDuck IT",
  owner: "Andy Thoss",
  location: "Münster & Umgebung",
  url: process.env.NEXT_PUBLIC_SITE_URL || localUrl,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
};

export const contactEmailLabel = siteConfig.email || "E-Mail wird vor Veröffentlichung ergänzt";
export const contactPhoneLabel = siteConfig.phone || "Telefonnummer wird vor Veröffentlichung ergänzt";

