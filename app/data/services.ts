export interface ServiceData {
  name: string;
  desc: string;
  images: string[];
  special?: boolean;
  isGeneral?: boolean;
}

export const services: ServiceData[] = [
  {
    name: 'Root Canal Treatment',
    desc: 'Pain-free root canal procedures to save severely infected or damaged teeth, restoring full function and comfort.',
    images: ['/asset/Root Canal Treatment.png'],
  },
  {
    name: 'Crown & Bridge',
    desc: 'Custom-crafted dental crowns and bridges to restore and protect teeth, providing natural aesthetics and long-term durability.',
    images: ['/asset/Dental Crowns & Bridges.png'],
  },
  {
    name: 'Orthodontic Braces',
    desc: 'Traditional and ceramic orthodontic braces to align teeth and correct bite issues for a confident, balanced smile.',
    images: [
      '/asset/Orthodontic Braces (Ceramic Braces).png',
      '/asset/Orthodontic Braces (Invisible Braces, Metal Braces, Ceramic Braces).png',
    ],
  },
  {
    name: 'Dental Implants',
    desc: 'State-of-the-art titanium implants as a permanent, natural-looking replacement for missing teeth — designed to last a lifetime.',
    images: ['/asset/dental implants 2.png'],
    special: true,
  },
  {
    name: 'Invisible Aligners',
    desc: 'Discreet, removable aligner trays that gradually straighten teeth without the visibility of traditional metal braces.',
    images: ['/asset/Invisible Aligners.webp'],
  },
  {
    name: 'Cosmetic Dentistry',
    desc: 'Smile makeovers using veneers, whitening and bonding — carefully crafted to enhance the natural beauty of your smile.',
    images: ['/asset/cosmetic dentistry.png'],
  },
  {
    name: 'Removable & Fixed Dentures',
    desc: 'Comfortable, well-fitted dentures — both removable and implant-supported fixed options — restoring function and appearance.',
    images: ['/asset/removable-and-fixed-dentures.png'],
  },
  {
    name: 'Child Dentistry',
    desc: 'Gentle, child-friendly dental care to build positive habits from an early age and keep young smiles healthy and bright.',
    images: ['/asset/Pediatric Dentistry (Child Care Dentistry).png'],
  },
  {
    name: 'Wisdom Tooth Extraction',
    desc: 'Safe, carefully managed surgical and non-surgical wisdom tooth extractions to relieve pain and prevent future complications.',
    images: ['/asset/wisdomtoothextraction.png'],
  },
  {
    name: 'Smile Makeover',
    desc: 'Full aesthetic transformations combining multiple procedures to completely revamp the look, feel and confidence of your smile.',
    images: ['/asset/smile makeover.png'],
    special: true,
  },
  {
    name: 'All General Dental Procedures',
    desc: 'Scaling, polishing, fillings, fluoride treatments and routine check-ups — complete general dentistry for the whole family.',
    images: ['/asset/Cavity Fillings.png','/asset/Scaling (Teeth Cleaning  Teeth Whitening).png','/asset/Teeth Splinting.jpg'],
    isGeneral: true,
  },
];
