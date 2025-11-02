import { StaticImageData } from 'next/image';
import img1 from '../components/home/OIP.webp'
import digital from '../(pages)/services/alston-inner-page-banner-digital-offset.jpg'
import pcopy from '../(pages)/services/alston-inner-page-banner.jpg'
import plot from '../(pages)/services/alston-inner-page-banner-autocad-plotting.jpg'
import plan from '../(pages)/services/plan-copying-blue-printing.jpg'
import computer from '../(pages)/services/inner-page-banner_07 (1).jpg'
import binding from '../(pages)/services/OUR_SERVICES_default_inner_page_header-1.jpg'



type service = {
    id : number,
    name:string,
    title:string,
    description:string,
    subDescription:string,
    image : StaticImageData,
    helps:string[],
    coverImage:StaticImageData,
}
const services :service[] = [
    {
      id: 1,
      name: 'Digital Offset Printing',
      title:'Title one',
      description: 'Digital Offset Printing in the ideal solution to your short-term and urgent printing needs. It not only allows you to print what you need fast, but you can also get the output in full colour or black and white. Alston Stationery is one of the most experienced and reliable suppliers of Digital Offset Printing in Sri Lanka.',
      subDescription:'We can help you print a wide range of items including:',
      image: img1,
      helps:['Business Cards','Letter Heads','Certificates',
        'Invitation Cards','Leaflets, Brochures, Flyers',
        'Stickers','Posters and Notices','CD/DVD Covers and Labels','Annual and Project reports'
    ],
    coverImage:digital
    },

    {
      id: 15,
      name: 'Color Printing',
      title:'Title one',
      description: 'Colour and Black & White Photocopying might sound pretty basic, but with years of experience in the industry and modern high-speed equipment, Alston Stationery is able to provide you with some of the best Photocopying Services in Sri Lanka. Our ultra-modern machines can copy single and double sides, collate and even staple if required.',
      subDescription:'We specialise in bulk photocopying and whatever the size of your photocopying requirement may be, Alston Stationery offers a fast, efficient and cost-effecting service.',
      image: img1,
      helps:['High Speed Photocopying','High Quality Colour and Black Copying','Best Paper and Massive stocks for rush jobs',
        'Well-trained staff','Same-day Service, Bulk Photocopying'
    ],
    coverImage:pcopy
    },
    {
      id: 16,
      name: 'Laser Printing',
      title:'Title one',
      description: 'Colour and Black & White Photocopying might sound pretty basic, but with years of experience in the industry and modern high-speed equipment, Alston Stationery is able to provide you with some of the best Photocopying Services in Sri Lanka. Our ultra-modern machines can copy single and double sides, collate and even staple if required.',
      subDescription:'We specialise in bulk photocopying and whatever the size of your photocopying requirement may be, Alston Stationery offers a fast, efficient and cost-effecting service.',
      image: img1,
      helps:['High Speed Photocopying','High Quality Colour and Black Copying','Best Paper and Massive stocks for rush jobs',
        'Well-trained staff','Same-day Service, Bulk Photocopying'
    ],
    coverImage:pcopy
    },
    {
      id: 17,
      name: 'Hard Binding',
      title:'Title one',
      description: 'Colour and Black & White Photocopying might sound pretty basic, but with years of experience in the industry and modern high-speed equipment, Alston Stationery is able to provide you with some of the best Photocopying Services in Sri Lanka. Our ultra-modern machines can copy single and double sides, collate and even staple if required.',
      subDescription:'We specialise in bulk photocopying and whatever the size of your photocopying requirement may be, Alston Stationery offers a fast, efficient and cost-effecting service.',
      image: img1,
      helps:['High Speed Photocopying','High Quality Colour and Black Copying','Best Paper and Massive stocks for rush jobs',
        'Well-trained staff','Same-day Service, Bulk Photocopying'
    ],
    coverImage:pcopy
    },
    {
      id: 2,
      name: 'Photocopying',
      title:'Title one',
      description: 'Colour and Black & White Photocopying might sound pretty basic, but with years of experience in the industry and modern high-speed equipment, Alston Stationery is able to provide you with some of the best Photocopying Services in Sri Lanka. Our ultra-modern machines can copy single and double sides, collate and even staple if required.',
      subDescription:'We specialise in bulk photocopying and whatever the size of your photocopying requirement may be, Alston Stationery offers a fast, efficient and cost-effecting service.',
      image: img1,
      helps:['High Speed Photocopying','High Quality Colour and Black Copying','Best Paper and Massive stocks for rush jobs',
        'Well-trained staff','Same-day Service, Bulk Photocopying'
    ],
    coverImage:pcopy
    },
    {
      id: 3,
      name: 'AutoCAD Plotting',
      title:'Title one',
      description: 'If you are looking for AutoCAD plotting services in Sri Lanka, Alston Stationery is a perfect choice for all types of architectural, construction, engineering, electrical and mechanical planning needs. Drawings can be printed on to White, Tracing Paper and Drafting Film in Inkjet Colour or Laser Black.',
      subDescription:'',
      image: img1,
      helps:['Wide Format Colour and Black &White Printing for 2A0, A0, A1 and A2 drawings',
        'Digitally Print from DWG, DWF, PDF, JPEF and TIFF formats',
        'Colour and Black & White scanning of the originals',
        'Enlargements and Reductions to any size'
    ],
    coverImage:plot
    },
    {
      id: 5,
      name: 'Plan Copying & Blue Printing',
      title:'Title one',
      description: 'We possess years of experience in providing high-speed, high-quality plan copying to our customers in large format Black & White copying. We also offer quality blue printing service using your originals.',
      subDescription:'Our Plan Copying and Blue Printing features include:',
      image: img1,
      helps:['Copy service up to 36” wide by any length on to white or tracing paper',
        'High Quality Reproduction',
        'Fast and Reliable Service',
        'Enlargements and Reductions can be made to suit your requirements.',
        'Blue Printing',
    ],
    coverImage:plan
    },
    {
      id: 6,
      name: 'Scanning',
      title:'Title one',
      subDescription:'',
      description: 'If you are running out of storage space with thousands of old documents and drawings, we can digitally scan them and turn them into secure, compact digital file for archiving on CD, DVD or an USB drive. At Alston Stationery, we have large format colour and Black & White Scanners to scan 2A0, A0, A1, A2, A3, A4 sized plans, drawings, maps to PDF, TIFF or JPEG file formats.',
      image: img1,
      helps:[],
      coverImage:computer
    },
    {
      id: 7,
      name: 'Laminating',
      title:'Title one',
      subDescription:'',
      description: 'Protect your vital documents for a lifetime with our high-quality laminating services. Lamination also gives your documents a professional and quality look. At Alston Stationery, we laminate A3 or A4 documents, photographs in our pouch laminator and smaller documents including leaflets, ID Cards etc. With our special roll laminator, we can laminate your posters, maps and drawings in gloss or matt formats to any length up to 1 meter wide.',
      image: img1,
      helps:[],
      coverImage:computer
    },
    {
      id: 8,
      name: 'Binding',
      title:'Title one',
      subDescription:'',
      description: 'Alston Stationery offers a wide range of Book Binding options to suit your requirements. We offer various sized spirals for small or large documents, together with transparency and plastic back boards to give your documents that professional look.',
      image: img1,
      helps:['Spiral Binding','Wire Binding','Velo Binding',
        'Coil Binding','Tape Binding',
    ],
    coverImage:binding
    },
    {
      id: 9,
      name: 'Seal Making',
      title:'Title one',
      subDescription:'',
      description: 'Make your own custom stamps within 24 Hours with Alston Stationery’s Seal Making service. We offer a wide range of seals including',
      image: img1,
      helps:['Polymer(Rubber) Stamps','Self-inked Stamps','Pre-inked Stamps',
        'Embossing Seals',
    ],
    coverImage:computer
    },
    {
      id: 10,
      name: 'ID Card Printing',
      title:'Title one',
      subDescription:'',
      description: 'We specialise in printing high-quality plastic cards including company ID, Membership cards, Gift Cards, at competitive rates for your company, association, small business or individual requirement. We provide full Colour printed plastic cards and all related accessories required such as plastic card holders, covers and coloured lanyards/neck cords.',
      image: img1,
      helps:[],
      coverImage:computer
    },
    {
      id: 11,
      name: 'Flex Printing',
      title:'Title one',
      subDescription:'',
      description: 'Looking for reliable and high-quality flex printing in Sri Lanka? Alston Stationery offers fast, high quality flex printing for banners, hoardings, signboards and event backdrops.',
      image: img1,
      helps:['X Banner Printing','Pull-up Banner Printing','Banner and hoarding flex printing','Backdrop printing'
    ],
    coverImage:computer
    },
    {
      id: 12,
      name: 'Document Finishing Services',
      title:'Title one',
      subDescription:'',
      description: 'Alston Stationery provides a wide range of Document Finishing Services including.',
      image: img1,
      helps:['Folding','Stapling','Punching',
        'Filing','Guillotining, Brochures, Flyers',
        'Stickers','Collating and Sorting'
    ],
    coverImage:computer

    },
    {
      id: 13,
      name: 'Graphic Design',
      title:'Title one',
      subDescription:'',
      description: 'Our skilled and experienced designers will assist you in developing any artwork, design, book cover, packaging and so much more. All you need to do is to brief us on your concept, your requirement and if possible your theme colours, and we will present you with a really impressive artwork to attract the attention of your target market.',
      image: img1,
      helps:[],
      coverImage:computer
    },
    {
      id: 14,
      name: 'Computer Related Services',
      title:'Title one',
      subDescription:'',
      description: 'Alston Stationery offers a wide range of Computer Related Services to suit your requirements. Our services include',
      image: img1,
      helps:['CD/DVD Duplication','Artwork Designing and Editing','Typesetting',
        'Internet and Email','Fax Service',
        'Email Print Facility','Stationery'
    ],
    coverImage:computer

    },
    // Add more products as needed
  ];

  export default services;