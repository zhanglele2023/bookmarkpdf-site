import { ImageResponse } from "next/og"

// Configure runtime for better deployment compatibility
export const runtime = 'nodejs'

export async function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
        }}
      >
        {/* Abstract shapes for visual interest */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "10%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />
      </div>,
      {
        width: 1920,
        height: 1080,
      },
    )
  } catch (error) {
    console.error('Error generating background image:', error)
    return new Response('Error generating image', { status: 500 })
  }
}
