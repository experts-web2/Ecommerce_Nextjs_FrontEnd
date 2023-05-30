// import { useState } from 'react'
// import { PlusIcon } from '@heroicons/react/solid'
// import { AnyListenerPredicate } from '@reduxjs/toolkit'

// export default function Upload() {
//   const [tags, setTags] = useState<any>([])
//   const [description, setDescription] = useState<any>('')
//   const [images, setImages] = useState<any>([])

//   const handleAddTag = (e:any) => {
//     if (e.key === 'Enter') {
//       const tag = e.target.value.trim()
//       if (tag) {
//         setTags([...tags, tag])
//         e.target.value = ''
//       }
//     }
//   }

//   const handleRemoveTag = (tag:any) => {
//     setTags(tags.filter((t:any) => t !== tag))
//   }

//   const handleDescriptionChange = (e:any) => {
//     setDescription(e.target.value)
//   }

//   const handleImageUpload = (e:any) => {
//     const files = Array.from(e.target.files)
//     setImages([...images, ...files])
//   }

//   const handleSubmit = (e:any) => {
//     e.preventDefault()
//     // submit the form
//   }

//   return (
//     <div className="max-w-md mx-auto">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
//             Images
//           </label>
//           <div className="border border-gray-300 rounded-md px-4 py-3 mb-3 flex items-center justify-center flex-col">
//             {images.length > 0 ? (
//               <div className="grid grid-cols-3 gap-4">
//                 {images.map((image:any) => (
//                   <div key={image.name} className="relative">
//                     <img src={URL.createObjectURL(image)} alt={image.name} className="w-full h-full object-cover rounded-md" />
//                     <button
//                       type="button"
//                       className="absolute top-0 right-0 p-2 bg-red-500 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
//                       onClick={() => setImages(images.filter((img:any) => img !== image))}
//                     >
//                       <span className="sr-only">Remove</span>
//                   
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <label htmlFor="fileInput" className="flex items-center justify-center cursor-pointer">
//                 <PlusIcon className="h-8 w-8 text-gray-400" />
//                 <span className="ml-3 text-sm font-medium text-gray-700">Upload images</span>
//                 <input id="fileInput" type="file" accept="image/*" multiple className="sr-only" onChange={handleImageUpload} />
//               </label>
//             )}
//           </div>
//         </div>
//         <div className="mb-6">
//           <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
//             Tags
//           </label>
//           <div className="border border-gray-300 rounded-md px-4 py-3 mb-3 flex flex-wrap gap-2">
           
