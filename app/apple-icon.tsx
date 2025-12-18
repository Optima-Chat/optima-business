import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Apple icon component
export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        {/* 内部装饰框 */}
        <div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* 中心圆点 */}
        <div
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
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
            width: '24px',
            height: '24px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            top: '40px',
            left: '40px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            top: '40px',
            right: '40px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            bottom: '40px',
            left: '40px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            bottom: '40px',
            right: '40px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
