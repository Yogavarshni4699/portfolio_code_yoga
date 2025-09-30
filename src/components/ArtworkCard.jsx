import React from 'react'
import { Card, CardContent } from './ui/card'

export default function ArtworkCard({ image, title, index }) {
  const rotations = [-8, -4, 0, 4, 8]
  const rotation = rotations[index % rotations.length]

  return (
    <Card
      className="overflow-hidden hover:scale-110 hover:rotate-0 hover:z-10 transition-all duration-500 cursor-pointer bg-white border-2 border-gray-200 shadow-2xl h-full"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <CardContent className="p-3 flex flex-col h-full">
        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 text-center">
          <p className="text-sm text-gray-800 font-semibold">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}
