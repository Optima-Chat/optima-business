import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Icon component
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2563EB 0%, #0891B2 100%)',
          borderRadius: '6px',
        }}
      >
        {/* 中心圆点 */}
        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: 'white',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* 四个角落的小圆点 */}
        <div
          style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            top: '6px',
            left: '6px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            top: '6px',
            right: '6px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            bottom: '6px',
            left: '6px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            bottom: '6px',
            right: '6px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
