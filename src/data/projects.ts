export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  technologies: string[];
  cover: string;
  images: string[];
  externalLink?: string;
}

export const projects: Project[] = [
  {
    slug: "viramundo",
    title: "Viramundo Viajes & Turismo",
    year: "2026",
    role: "Graphic Designer & Web Designer",
    technologies: ["Illustrator", "Photoshop", "Wordpress"],
    cover: "projects/viramundo/cover.webp",
    images: [
      "projects/viramundo/viramundo1.webp",
      "projects/viramundo/viramundo2.webp",
      "projects/viramundo/viramundo3.webp",
      "projects/viramundo/viramundo4.webp",
      "projects/viramundo/viramundo5.webp",
    ],
    externalLink: "https://viramundotur.com/",
  },
  {
    slug: "full_fisio",
    title: "Full Fisio",
    year: "2025",
    role: "Graphic Designer",
    technologies: ["Illustrator", "Photoshop"],
    cover: "projects/full_fisio/cover.webp",
    images: [
      "projects/full_fisio/full_fisio1.webp",
      "projects/full_fisio/full_fisio2.webp",
      "projects/full_fisio/full_fisio3.webp",
      "projects/full_fisio/full_fisio4.webp",
      "projects/full_fisio/full_fisio5.webp",
    ],
    externalLink: "https://www.instagram.com/full.fisio",
  },
  {
    slug: "el_codigo_del_placer",
    title: "El Código del Placer",
    year: "2025",
    role: "Graphic Designer",
    technologies: ["Illustrator", "Photoshop"],
    cover: "projects/el_codigo_del_placer/cover.webp",
    images: [
      "projects/el_codigo_del_placer/el_codigo_del_placer1.webp",
      "projects/el_codigo_del_placer/el_codigo_del_placer2.webp",
      "projects/el_codigo_del_placer/el_codigo_del_placer3.webp",
      "projects/el_codigo_del_placer/el_codigo_del_placer4.webp",
    ],
    externalLink: "https://www.instagram.com/elcodigodelplacer_",
  },
  {
    slug: "arias_arguelles",
    title: "Arias Argüelles - Aero Soluciones",
    year: "2025",
    role: "Graphic Designer & RRSS",
    technologies: ["Illustrator", "Photoshop", "Canva"],
    cover: "projects/arias_arguelles/cover.webp",
    images: [
      "projects/arias_arguelles/arias_arguelles1.webp",
      "projects/arias_arguelles/arias_arguelles3.webp",
      "projects/arias_arguelles/arias_arguelles4.webp",
      "projects/arias_arguelles/arias_arguelles2.webp",
      "projects/arias_arguelles/arias_arguelles5.webp",
      "projects/arias_arguelles/arias_arguelles6.webp",
      "projects/arias_arguelles/arias_arguelles7.webp",
    ],
    externalLink: "https://www.instagram.com/ariasarguelles",
  },
  {
    slug: "bueno_lagarto",
    title: "Bueno Lagarto | Clothes Brand",
    year: "2024-2026",
    role: "Product Owner & Graphic Designer",
    technologies: ["Illustrator", "Photoshop", "Textil"],
    cover: "projects/bueno_lagarto/cover.webp",
    images: [
      "projects/bueno_lagarto/bueno_lagarto1.webp",
      "projects/bueno_lagarto/bueno_lagarto2.webp",
      "projects/bueno_lagarto/bueno_lagarto3.webp",
      "projects/bueno_lagarto/bueno_lagarto4.webp",
      "projects/bueno_lagarto/bueno_lagarto5.webp",
    ],
  },
  {
    slug: "krenergy",
    title: "Krenergy",
    year: "2024",
    role: "Graphic Designer",
    technologies: ["Illustrator"],
    cover: "projects/krenergy/cover.webp",
    images: [
      "projects/krenergy/krenergy1.webp",
      "projects/krenergy/krenergy2.webp",
      "projects/krenergy/krenergy3.webp",
      "projects/krenergy/krenergy4.webp",
      "projects/krenergy/krenergy5.webp",
    ],
  },
  {
    slug: "lupino",
    title: "Lupino | Discos & Distro",
    year: "2024",
    role: "Graphic Designer",
    technologies: ["Illustrator"],
    cover: "projects/lupino/cover.webp",
    images: [
      "projects/lupino/lupino1.webp",
      "projects/lupino/lupino2.webp",
      "projects/lupino/lupino3.webp",
      "projects/lupino/lupino4.webp",
      "projects/lupino/lupino5.webp",
    ],
  },
  {
    slug: "idear",
    title: "Idear Digital",
    year: "2023",
    role: "Graphic Designer",
    technologies: ["Illustrator"],
    cover: "projects/idear/cover.webp",
    images: [
      "projects/idear/idear1.webp",
      "projects/idear/idear2.webp",
      "projects/idear/idear3.webp",
      "projects/idear/idear4.webp",
    ],
  },
];