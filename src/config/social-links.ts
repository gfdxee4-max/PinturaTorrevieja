export const socialLinks = [
  {
    id: "facebook",
    name: "Facebook",
    ariaLabel: "Facebook PaintLab",
    href: "https://www.facebook.com/profile.php?id=61585355006452",
  },
  {
    id: "instagram",
    name: "Instagram",
    ariaLabel: "Instagram PaintLab",
    href: "https://www.instagram.com/paint_lab_torrevieja/",
  },
] as const;

export const socialProfileUrls = socialLinks.map((item) => item.href);
