import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OptiDuck IT",
    short_name: "OptiDuck IT",
    description: "KI-Workflows und Automationen für KMU in Nottuln, Münster und Umgebung.",
    start_url: "/",
    display: "standalone",
    background_color: "#10101a",
    theme_color: "#10101a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
