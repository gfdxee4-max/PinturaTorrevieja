import { locales, type Locale } from "@/config/i18n";
import type { Project } from "@/data/projects";
import { mercedesTranslations } from "@/data/mercedes-v-class-i18n";

export type MercedesProjectCopy = {
  title: string;
  headline: string;
  description: string;
  intro: string;
  beforeTitle: string;
  beforeText: string;
  workTitle: string;
  workText: string;
  repairTitle: string;
  repairText: string;
  resultTitle: string;
  resultText: string;
  category: string;
  services: readonly string[];
  beforeAlt: string;
  afterAlt: string;
  detailBeforeAlt: string;
  detailAfterAlt: string;
  cta: string;
};

type Copy = MercedesProjectCopy;

const ru: Copy = {
  title: "Ремонт и покраска задней двери Mercedes-Benz V-Class",
  headline: "Ремонт и покраска задней двери Mercedes-Benz V-Class",
  description: "Кузовной ремонт и покраска повреждённой задней боковой двери Mercedes-Benz V-Class в Торревьехе. Восстановление вмятины, царапин и лакокрасочного покрытия в PaintLab.",
  intro: "Mercedes-Benz V-Class поступил в PaintLab с повреждением задней боковой двери: выраженной вмятиной, глубокими царапинами и повреждением лакокрасочного покрытия. Выполнили восстановление формы двери, подготовку поверхности, подбор цвета и покраску.",
  beforeTitle: "Состояние до ремонта",
  beforeText: "На задней боковой двери Mercedes-Benz V-Class была заметная вмятина и множественные глубокие царапины. В нескольких местах лакокрасочное покрытие было повреждено, поэтому перед покраской потребовалось восстановить форму двери и подготовить поверхность.",
  workTitle: "Что сделали",
  workText: "Осмотрели повреждение, восстановили форму задней двери и устранили вмятину. Ремонтную зону подготовили, выровняли и загрунтовали. Затем подобрали цвет, нанесли базовое покрытие и лак, после чего проверили результат.",
  repairTitle: "Ремонт задней двери Mercedes-Benz V-Class",
  repairText: "Перед окраской важно было восстановить геометрию повреждённого участка двери и получить ровную поверхность. После кузовного ремонта дверь подготовили к окраске, подобрали цвет и нанесли новое лакокрасочное покрытие. Такая работа сочетает кузовной ремонт повреждённой двери и последующую покраску автомобиля с подбором цвета.",
  resultTitle: "Результат после ремонта",
  resultText: "После кузовного ремонта и покраски форма задней двери Mercedes-Benz V-Class восстановлена, поверхность выровнена, а повреждённый участок получил новое лакокрасочное покрытие. На странице показаны реальные фотографии до и после ремонта.",
  category: "Кузовной ремонт и покраска",
  services: ["Осмотр повреждения", "Восстановление формы задней двери", "Устранение вмятины", "Подготовка и выравнивание поверхности", "Грунтование", "Подбор цвета", "Нанесение базового покрытия и лака", "Контроль результата"],
  beforeAlt: "Повреждённая задняя дверь Mercedes-Benz V-Class с вмятиной и царапинами до кузовного ремонта",
  afterAlt: "Задняя дверь Mercedes-Benz V-Class после кузовного ремонта и покраски в PaintLab Torrevieja",
  detailBeforeAlt: "Вмятина и глубокие царапины на боковой двери Mercedes-Benz V-Class до ремонта",
  detailAfterAlt: "Восстановленная и окрашенная боковая дверь Mercedes-Benz V-Class после ремонта",
  cta: "Нужно восстановить повреждённую дверь или другой кузовной элемент? Отправьте фотографии автомобиля в WhatsApp для предварительной оценки.",
};

const en: Copy = {
  title: "Mercedes-Benz V-Class rear door repair and painting",
  headline: "Mercedes-Benz V-Class rear door repair and painting",
  description: "Body repair and painting of a damaged Mercedes-Benz V-Class rear side door in Torrevieja, including dent, scratch and paintwork restoration at PaintLab.",
  intro: "This Mercedes-Benz V-Class arrived at PaintLab with damage to the rear side door: a pronounced dent, deep scratches and damaged paintwork. We restored the door shape, prepared the surface, matched the colour and repainted the repaired area.",
  beforeTitle: "Condition before repair",
  beforeText: "The rear side door had a visible dent and several deep scratches. The paintwork was damaged in multiple areas, so the door shape and surface had to be restored before painting.",
  workTitle: "Work carried out",
  workText: "We inspected the damage, restored the rear door shape and removed the dent. The repair area was prepared, levelled and primed before colour matching, basecoat, clear coat and a final result check.",
  repairTitle: "Mercedes-Benz V-Class rear door repair",
  repairText: "Before painting, the damaged section had to be reshaped and levelled. After the body repair, the door was prepared, the colour was matched and new paintwork was applied. This project shows real car body repair in Torrevieja and vehicle painting work.",
  resultTitle: "Result after repair",
  resultText: "After body repair and painting, the rear door shape was restored, the surface levelled and the damaged area refinished. The page shows genuine photographs taken before and after the repair.",
  category: "Body repair and painting",
  services: ["Damage inspection", "Rear door shape restoration", "Dent removal", "Repair area preparation and levelling", "Priming", "Colour matching", "Basecoat and clear coat application", "Final result check"],
  beforeAlt: "Damaged Mercedes-Benz V-Class rear door with a dent and scratches before body repair",
  afterAlt: "Mercedes-Benz V-Class rear door after body repair and painting at PaintLab Torrevieja",
  detailBeforeAlt: "Dent and deep scratches on the Mercedes-Benz V-Class side door before repair",
  detailAfterAlt: "Restored and painted Mercedes-Benz V-Class side door after repair",
  cta: "Need a damaged door or another body panel repaired? Send vehicle photos on WhatsApp for an initial assessment.",
};

const copies: Record<Locale, Copy> = { ...mercedesTranslations, en, ru };
function localized<T>(select: (value: Copy) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map((locale) => [locale, select(copies[locale])])) as Record<Locale, T>;
}

const imageRoot = "/images/projects/mercedes-v-class-rear-door";

export const mercedesVClassProject: Project = {
  slug: "remont-pokraska-zadney-dveri-mercedes-v-class-torrevieja",
  vehicle: "Mercedes-Benz V-Class",
  title: localized((value) => value.title),
  headline: localized((value) => value.headline),
  category: localized((value) => value.category),
  beforeImage: `${imageRoot}/before-main.webp`,
  afterImage: `${imageRoot}/after-main.webp`,
  beforeImageWidth: 1200,
  beforeImageHeight: 1600,
  afterImageWidth: 1200,
  afterImageHeight: 1600,
  shortDescription: localized((value) => value.description),
  fullDescription: localized((value) => [value.intro]),
  detailSections: [
    { id: "condition", title: localized((value) => value.beforeTitle), text: localized((value) => value.beforeText) },
    { id: "work", title: localized((value) => value.workTitle), text: localized((value) => value.workText) },
    {
      id: "repair",
      title: localized((value) => value.repairTitle),
      text: localized((value) => value.repairText),
      links: {
        ru: [
          { href: "/ru/kuzovnoy-remont-torrevieja", label: "кузовной ремонт" },
          { href: "/ru/avtopokraska-torrevieja", label: "покраску автомобиля" },
        ],
      },
    },
    { id: "result", title: localized((value) => value.resultTitle), text: localized((value) => value.resultText) },
  ],
  services: localized((value) => value.services),
  publishedAt: "2026-10-24T00:00:00+02:00",
  altBefore: localized((value) => value.beforeAlt),
  altAfter: localized((value) => value.afterAlt),
  seoTitle: localized((value) => `${value.headline} | PaintLab`),
  seoDescription: localized((value) => value.description),
  location: "PaintLab, Torrevieja",
  imageQuality: 95,
  comparisonLayout: "portrait",
  beforeImageClassName: "object-cover",
  afterImageClassName: "object-cover",
  beforeObjectPosition: "50% 50%",
  afterObjectPosition: "50% 50%",
  comparisons: [{
    id: "rear-door-detail",
    title: localized((value) => value.beforeTitle),
    showTitle: false,
    beforeImage: `${imageRoot}/before-detail.webp`,
    afterImage: `${imageRoot}/after-detail.webp`,
    altBefore: localized((value) => value.detailBeforeAlt),
    altAfter: localized((value) => value.detailAfterAlt),
    beforeImageWidth: 1200,
    beforeImageHeight: 1600,
    afterImageWidth: 1200,
    afterImageHeight: 1600,
  }],
  ctaText: localized((value) => value.cta),
  relatedServicesTitle: { en: "Related services", ru: "Связанные услуги", uk: "Пов’язані послуги" },
  relatedLinks: {
    en: [
      { href: "/en/car-body-repair-torrevieja", label: "Car body repair in Torrevieja" },
      { href: "/en/car-respray-torrevieja", label: "Vehicle painting" },
    ],
    uk: [
      { href: "/uk/kuzovnyi-remont-torrevieja", label: "Кузовний ремонт у Торрев’єсі" },
      { href: "/uk/farbuvannya-avto-torrevieja", label: "Фарбування авто" },
    ],
  },
};
