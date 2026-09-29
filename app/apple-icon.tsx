import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          background: 'linear-gradient(145deg, #0f172a 0%, #020617 100%)',
          border: '4px solid rgba(99, 102, 241, 0.4)',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 28px -4px rgba(79, 70, 229, 0.6)',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: -2,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            GS
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: 14,
              right: 14,
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#38bdf8',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
