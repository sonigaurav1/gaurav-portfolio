import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

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
          borderRadius: 8,
          background: 'linear-gradient(145deg, #0f172a 0%, #020617 100%)',
          border: '1.5px solid rgba(99, 102, 241, 0.6)',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: -0.5,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          GS
        </span>
        <div
          style={{
            position: 'absolute',
            bottom: 4,
            right: 5,
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#38bdf8',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
