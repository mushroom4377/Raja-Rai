import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 45%, #ccfbf1 100%)",
          color: "#0f172a",
          padding: "52px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.82)",
            padding: "48px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "26px",
              color: "#0f766e"
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                background: "#0f766e"
              }}
            />
            Meta Ads Expert
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.05 }}>
              Get Consistent Sales Without Wasting Money
            </div>
            <div style={{ fontSize: "28px", color: "#334155", lineHeight: 1.35 }}>
              A premium Meta Ads landing page designed to turn traffic into booked
              strategy calls.
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                background: "#0f766e",
                color: "white",
                padding: "16px 24px",
                fontSize: "24px"
              }}
            >
              Book Free Strategy Call
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid rgba(15, 23, 42, 0.1)",
                padding: "16px 24px",
                fontSize: "24px"
              }}
            >
              Predictable Growth System
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
