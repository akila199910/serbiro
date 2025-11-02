import img1 from '../components/home/OIP.webp'
import { StaticImageData } from 'next/image';
import noImg from '../(pages)/products/no-image.jpeg'
import printer from '../(pages)/products/printer.jpg'
import toner from '../(pages)/products/tonerts.jpg'
import ink from '../(pages)/products/ink.jpg'
import paper from '../(pages)/products/papers.jpg'
import stationary from '../(pages)/products/stationary.jpg'
import school from '../(pages)/products/school.jpg'
import photocopy from '../(pages)/products/photocopy.jpg'
import sparepart from '../(pages)/products/photocopier-spare-parts.jpg'
import office from '../(pages)/products/office.jpg'

// type service = {
//     id : number,
//     name:string,
//     title:string,
//     description:string,
//     subDescription:string,
//     image : StaticImageData,
//     helps:string[],
//     coverImage:StaticImageData,
// }

const products = [
    {
      id:1,
      cName:"Printer",
      image:printer,
      cDescription: "small description of this printer category",
      products:[
                {
            
                  id: 1,
                  name: 'Printer 1',
                  description: 'Description of printer 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Printer 2',
                  description: 'Description of printer 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Printer 3',
                  description: 'Description of printer 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Printer 4',
                  description: 'Description of printer 4.',
                  image: img1,
                },
      ]
    },
    {
      id:2,
      cName:"Toners",
      image:toner,
      cDescription: "small description of this Toners category",
      products:[
                {
            
                  id: 1,
                  name: 'Toners 1',
                  description: 'Description of Toners 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Toners 2',
                  description: 'Description of Toners 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Toners 3',
                  description: 'Description of Toners 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Toners 4',
                  description: 'Description of Toners 4.',
                  image: img1,
                },
      ]
    },

    {
      id:3,
      cName:"Ink",
      image:ink,
      cDescription: "small description of this Ink category",
      products:[
                {
            
                  id: 1,
                  name: 'Ink 1',
                  description: 'Description of Ink 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Ink 2',
                  description: 'Description of Ink 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Ink 3',
                  description: 'Description of Ink 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Ink 4',
                  description: 'Description of Ink 4.',
                  image: img1,
                },
      ]
    },

    {
      id:4,
      cName:"Papers",
      image:paper,
      cDescription: "small description of this Papers category",
      products:[
                {
            
                  id: 1,
                  name: 'Papers 1',
                  description: 'Description of Papers 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Papers 2',
                  description: 'Description of Papers 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Papers 3',
                  description: 'Description of Papers 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Papers 4',
                  description: 'Description of Papers 4.',
                  image: img1,
                },
      ]
    },
    {
      id:5,
      cName:"Stationary Items",
      image:stationary,
      cDescription: "small description of this Stationary Items category",
      products:[
                {
            
                  id: 1,
                  name: 'Stationary Items 1',
                  description: 'Description of Stationary Items 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Stationary Items 2',
                  description: 'Description of Stationary Items 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Stationary Items 3',
                  description: 'Description of Stationary Items 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Stationary Items 4',
                  description: 'Description of Stationary Items 4.',
                  image: img1,
                },
      ]
    },
    {
      id:6,
      cName:"School Items",
      image:school,
      cDescription: "small description of this School Items category",
      products:[
                {
            
                  id: 1,
                  name: 'School Items 1',
                  description: 'Description of School Items 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'School Items 2',
                  description: 'Description of School Items 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'School Items 3',
                  description: 'Description of School Items 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'School Items 4',
                  description: 'Description of School Items 4.',
                  image: img1,
                },
      ]
    },
    {
      id:7,
      cName:"Photocopy Machines",
      image:photocopy,
      cDescription: "small description of this Photocopy Machines category",
      products:[
                {
            
                  id: 1,
                  name: 'Photocopy Machines 1',
                  description: 'Description of Photocopy Machines 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Photocopy Machines 2',
                  description: 'Description of Photocopy Machines 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Photocopy Machines 3',
                  description: 'Description of Photocopy Machines 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Photocopy Machines 4',
                  description: 'Description of Photocopy Machines 4.',
                  image: img1,
                },
      ]
    },
    {
      id:8,
      cName:"Spare Parts",
      image:sparepart,
      cDescription: "small description of this Spare Parts category",
      products:[
                {
            
                  id: 1,
                  name: 'Spare Parts 1',
                  description: 'Description of Spare Parts 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Spare Parts 2',
                  description: 'Description of Spare Parts 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Spare Parts 3',
                  description: 'Description of Spare Parts 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Spare Parts 4',
                  description: 'Description of Spare Parts 4.',
                  image: img1,
                },
      ]
    },
    {
      id:9,
      cName:"Office Equipment",
      image:office,
      cDescription: "small description of this Office Equipment category",
      products:[
                {
            
                  id: 1,
                  name: 'Office Equipment 1',
                  description: 'Description of Office Equipment 1.',
                  image: img1,
                },
                {
            
                  id: 2,
                  name: 'Office Equipment 2',
                  description: 'Description of Office Equipment 2.',
                  image: img1,
                },
                {
            
                  id: 3,
                  name: 'Office Equipment 3',
                  description: 'Description of Office Equipment 3.',
                  image: img1,
                },
                {
            
                  id: 4,
                  name: 'Office Equipment 4',
                  description: 'Description of Office Equipment 4.',
                  image: img1,
                },
      ]
    },
  ];

  export default products;