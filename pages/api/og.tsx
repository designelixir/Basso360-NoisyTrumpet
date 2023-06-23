import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/NITTI.TTF", import.meta.url)
).then((res) => res.arrayBuffer());
const otherFont = fetch(
  new URL("../../public/fonts/MAECENAS-REGULAR.TTF", import.meta.url)
).then((res) => res.arrayBuffer());

const bgSource =
  "https://cms.basso-yanity.com/wp-content/uploads/2023/02/og.jpg";
const logo =
  "https://cms.basso-yanity.com/wp-content/uploads/2023/02/logo-white.png";

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fontData = await font;
    const otherFontData = await otherFont;
    const title = searchParams.get("title") || "Basso | Yanity 360 Advertising";
    const description = searchParams.get("description") || "";
    const image = searchParams.get("image") || bgSource;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${bgSource})`,
            backgroundSize: "1200px 630px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div tw="flex h-full items-center justify-center">
            <div tw="flex flex-col items-center justify-center">
              <img src={logo} alt={title} width={200} height={200} />
              <h1 tw="text-white text-center text-4xl font-sans">{title}</h1>
              {description && (
                <p tw="font-serif text-white max-w-3xl mx-auto text-center text-lg font-serif">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "nitti",
            data: fontData,
            style: "normal",
          },
          {
            name: "maecenas",
            data: otherFontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
