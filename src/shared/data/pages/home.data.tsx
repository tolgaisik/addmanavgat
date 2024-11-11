import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/kadinlar.png';
import cameraBackImg from '~/assets/images/meclis.png';
import gasImg from '~/assets/images/manavgat.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Manavgat Atatürkçü Düşünce Derneği <span className="hidden md:inline"> </span> <span></span>{' '}
    </>
  ),
  subtitle: (
    <>
      <span className=" italic">
        &quot;Arkadaşlarımız ve milletin bütün fertleri gibi, millî davamızda benim de emeğim geçmiş ise, bu çalışmada
        iş yapma kuvveti ve başarı varsa, bunu bana mal etmeyiniz. Ancak ve ancak bütün milletin manevî kişiliğine mal
        ediniz.&quot;
      </span>
      <br />
      <cite>Mustafa Kemal Atatürk</cite>
    </>
  ),
  callToAction: { text: 'Etkinlikler', href: '/etkinlikler' },
  callToAction2: {
    text: 'Daha Fazla Bilgi',
    href: '#hakkimizda',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'hakkimizda',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Kısaca üstlendiğimiz görevler <span className="hidden md:inline"> </span> <span></span>{' '}
      </>
    ),
    subtitle:
      "Dernek olarak üstlendiğimiz görev, Atatürk ilke ve inkılapları doğrultusunda, Atatürkçü düşünceyi yaymak, Atatürk'ün fikir ve devrimlerini yaşatmak, korumak ve geliştirmek, halkımıza milli kültürümüzü ve tarihimizi öğretmektir.",
    tagline: 'Biz Kimiz ?',
  },
  items: [
    {
      title: 'Kuruluş Amacı',
      description:
        "Atatürkçü Düşünce Derneği, Mustafa Kemal Atatürk'ün ilke ve inkılaplarını koruyup yaşatmak, onun fikirlerini topluma yaymak amacıyla 1989 yılında kurulmuştur.",
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Daha Fazla Bilgi',
        href: '/',
      },
    },
    {
      title: 'Temel İlkeler',
      description:
        "Dernek, Atatürk'ün laiklik, cumhuriyetçilik, milliyetçilik, halkçılık, devrimcilik ve devletçilik ilkelerini savunur ve bu değerleri toplumsal hayatta egemen kılmayı hedefler.",
      icon: IconComponents,
      callToAction: {
        text: 'Daha Fazla Bilgi',
        href: '/',
      },
    },
    {
      title: 'Eğitim ve Bilinçlendirme',
      description:
        'Atatürkçü düşünceyi yaymak için seminerler, konferanslar düzenler, yayınlar çıkarır ve öğrencilere yönelik eğitim faaliyetleri yürütür.',
      icon: IconListCheck,
      callToAction: {
        text: 'Daha Fazla Bilgi',
        href: '/',
      },
    },
    {
      title: 'Sosyal Katkı:',
      description:
        "Dernek, Türkiye'nin çağdaş medeniyetler seviyesine ulaşabilmesi için toplumsal, kültürel ve siyasi alanlarda aktif olarak çalışmalar yapar ve toplumu bilinçlendirir.",
      icon: IconBulb,
      callToAction: {
        text: 'Daha Fazla Bilgi',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Atatürkçü Düşünce Toplumsal Bir Harekettir',
    subtitle: 'Atatürkçü düşünce, Mustafa Kemal Atatürk’ün ilke ve inkılaplarına bağlılıkla tanımlanır.',
    tagline: 'Faydalı Bilgiler',
  },
  content: 'Atatürkçü Düşüncenin toplumsal faydaları',
  items: [
    {
      title: 'Toplumsal Birlik ve Beraberlik',
      description:
        'Atatürkçü düşünce, farklı kültür ve kimliklere sahip bireyler arasında ortak bir değerler zemini oluşturur. Laik, demokratik ve çağdaş bir toplum anlayışı, toplumsal huzuru ve birlikte yaşamayı teşvik eder. Bu, toplumun farklı kesimlerinin eşit haklara sahip olmasını ve birbirlerine saygılı bir şekilde yaşamalarını sağlar.',
    },
    {
      title: 'Çağdaşlaşma ve Gelişme',
      description:
        "Atatürkçü düşünce, bilimsel düşünceyi ve teknolojik ilerlemeyi temel alır. Atatürk’ün eğitim, bilim ve sanata verdiği önem, Türkiye'nin modernleşmesi için güçlü bir zemin oluşturur. Bu düşünce, ülkenin küresel düzeyde rekabet edebilmesi için bilimsel ve kültürel gelişmeyi teşvik eder.",
    },
    {
      title: 'Hukuk ve Adaletin Güçlenmesi',
      description:
        'Atatürkçü düşünce, hukukun üstünlüğü ilkesini savunur ve adaletin toplumda her birey için eşit şekilde sağlanması gerektiğini vurgular. Laik ve demokratik bir hukuk düzeni, bireylerin haklarını güvence altına alır ve devletin gücünü halkın hizmetine sunar. Bu da toplumsal düzenin sağlıklı işlemesine katkı sağlar.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content: 'Atatürkçü Düşünceyi Benimseyen Bireylerin İlkeleri ve Değerleri',
  items: [
    {
      title: 'Bilim ve akıl yoluyla toplumsal gelişmenin sağlanması gerektiğine inanır.',
    },
    {
      title: 'Din ve devlet işlerini birbirinden ayırarak, her bireyin inanç özgürlüğünü korur.',
    },
    {
      title: "Türkiye'nin bağımsızlığını ve ulusal birliğini her şeyin önünde tutar.",
    },
    {
      title: "Atatürk'ün gerçekleştirdiği inkılapları benimser ve toplumsal yeniliklere açıktır.",
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Manavgat Atatürkçü Düşünce Derneği Olarak Yaptığımız İşler',
  },
  items: [
    {
      title: 'Sosyal Sorumluluk Projeleri',
      description:
        'Dernek olarak, çeşitli sosyal sorumluluk projeleri düzenleyerek topluma fayda sağlamayı hedefliyoruz. Eğitim, sağlık, çevre ve kültür alanlarında projeler geliştiriyor ve uyguluyoruz.',
      icon: IconArrowDown,
    },
    {
      title: 'Eğitim ve Bilinçlendirme Faaliyetleri',
      description:
        'Atatürkçü düşünceyi yaymak ve genç nesilleri Atatürk ilke ve inkılaplarıyla tanıştırmak amacıyla eğitim ve bilinçlendirme faaliyetleri düzenliyoruz. Okullarda, üniversitelerde ve sivil toplum kuruluşlarında eğitim seminerleri veriyoruz.',
      icon: IconArrowDown,
    },
    {
      title: 'Kültürel Etkinlikler',
      description:
        "Atatürk'ün fikir ve devrimlerini yaşatmak ve korumak amacıyla kültürel etkinlikler düzenliyoruz. Sergiler, konferanslar, tiyatro oyunları ve paneller düzenleyerek toplumu bilinçlendiriyoruz.",
      icon: IconArrowDown,
    },
    {
      title: 'Daha Yaşanabilir Bir Manavgat!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'İlçemizin İleri Gelenlerinden Gelen Yorumlar',
    subtitle:
      'Manavgat ilçemizin ileri gelenleri, Atatürkçü Düşünce Derneği hakkında neler düşündüklerini paylaşıyorlar.',
  },
  testimonials: [
    {
      name: 'Şükrü Sözen',
      job: 'Vatandaş',
      testimonial: `Manavgat Atatürkçü Düşünce Derneği, ilçemizin sosyal ve kültürel hayatına büyük katkılar sağlıyor. Derneğin düzenlediği etkinlikler, toplumun farklı kesimlerini bir araya getiriyor ve birlikte yaşama kültürünü güçlendiriyor.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Mehmet Çiçek',
      job: 'Vatandaş',
      testimonial: `Atatürkçü Düşünce Derneği, ilçemizin kültürel ve tarihi mirasını korumak ve yaşatmak için önemli bir rol oynuyor. Dernek, genç nesillere Atatürk ilke ve inkılaplarını öğretmek ve onları bu değerlerle yetiştirmek için büyük çaba sarf ediyor.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Aysel Kaya',
      job: 'Vatandaş',
      testimonial: `Manavgat Atatürkçü Düşünce Derneği, ilçemizin sosyal ve kültürel hayatına büyük katkılar sağlıyor. Derneğin düzenlediği etkinlikler, toplumun farklı kesimlerini bir araya getiriyor ve birlikte yaşama kültürünü güçlendiriyor.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Fatih Yılmaz',
      job: 'Vatandaş',
      testimonial: `Atatürkçü Düşünce Derneği, ilçemizin kültürel ve tarihi mirasını korumak ve yaşatmak için önemli bir rol oynuyor. Dernek, genç nesillere Atatürk ilke ve inkılaplarını öğretmek ve onları bu değerlerle yetiştirmek için büyük çaba sarf ediyor.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Tolga Işık',
      job: 'Vatandaş',
      testimonial: `Manavgat Atatürkçü Düşünce Derneği, ilçemizin sosyal ve kültürel hayatına büyük katkılar sağlıyor. Derneğin düzenlediği etkinlikler, toplumun farklı kesimlerini bir araya getiriyor ve birlikte yaşama kültürünü güçlendiriyor.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Sıkça Sorulan Sorular',
    subtitle:
      'Atatürkçü Düşünce Derneği hakkında merak edilen sorular ve cevapları. Eğer sorunuzun cevabını bulamadıysanız, lütfen bizimle iletişime geçin.',
    tagline: 'SSS',
  },
  items: [
    {
      title: 'Etkinliklerinize nasıl katılabilirim?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
    {
      title: 'Derneğin üyelik koşulları nelerdir?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
    {
      title: 'Derneğin faaliyetleri hakkında nasıl bilgi alabilirim?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
    {
      title: 'Derneğe nasıl bağış yapabilirim?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
    {
      title: 'Derneğin misyonu ve vizyonu nedir?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
    {
      title: 'Derneğin tarihçesi hakkında bilgi alabilir miyim?',
      description: `Şimdilik buraya bir açıklama yazmadık.`,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Ekip Üyeleri',
    subtitle: 'Ekip üyelerimiz hakkında daha fazla bilgi almak için aşağıdaki bağlantılara tıklayabilirsiniz.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Bizimle İletişime Geçin',
    subtitle:
      'Atatürkçü Düşünce Derneği hakkında daha fazla bilgi almak veya sorularınızı sormak için aşağıdaki formu doldurabilirsiniz.',
    tagline: 'İletişim',
  },
  content:
    'Atatürkçü Düşünce Derneği, Mustafa Kemal Atatürk’ün ilke ve inkılaplarına bağlılıkla tanımlanır. Dernek olarak, Atatürk ilke ve inkılaplarını koruyup yaşatmak, onun fikirlerini topluma yaymak amacıyla 1989 yılında kurulmuştur.',
  items: [
    {
      title: 'Adresimiz',
      description: ['Mahmut Yüksel Bulvarı No.12 Daire.1', 'Manavgat, Antalya, Türkiye'],
      icon: IconMapPin,
    },
    {
      title: 'İletişim Bilgileri',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: addmanavgat@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Çalışma Saatleri',
      description: ['Pazartesi - Cuma: 9:00 - 17:00', 'Cumartesi - Pazar: Kapalı'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'İletişim Formu',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Adınız ve Soyadınız',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'E-posta Adresiniz',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Mesajınızı buraya yazınız',
    },
    btn: {
      title: 'Gönder',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Atatürkçü Düşünce Derneği Hakkında Daha Fazla Bilgi Alın',
  subtitle: '',
  callToAction: {
    text: 'ADD Hakkında',
    href: 'https://add.org.tr/',
    icon: IconDownload,
  },
  items: [
    {
      title: 'ADD Resmi Web Sitesi',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://add.org.tr/',
      target: '_blank',
    },
    {
      title: 'ADD Tüzüğü',
      description: 'ADD tüzüğüne göz atmak için tıklayın.',
      href: 'https://add.org.tr/tuzugumuz/',
      target: '_blank',
    },
    /* {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    }, */
  ],
};
