import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatDollarAmount(amount: number, removeDecimals: boolean = false): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: removeDecimals ? 0 : 2,
    maximumFractionDigits: removeDecimals ? 0 : 2,
  })
}

export interface PixelCrop {
  x: number
  y: number
  width: number
  height: number
}

export async function getCroppedImg(imageSrc: string, pixelCrop: PixelCrop): Promise<Blob> {
  const image = new Image()
  image.src = imageSrc
  await new Promise((resolve) => (image.onload = resolve))

  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')

  if (!ctx) throw new Error('Failed to get canvas context')

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
    }, 'image/jpeg')
  })
}
