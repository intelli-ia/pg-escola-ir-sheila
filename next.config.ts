import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir o servidor de desenvolvimento por outro dispositivo da rede local (ex.: o celular em http://192.168.1.3:3000 ou pelo nome do Mac, http://macbook:3000).
  // Vale só no `next dev`; não afeta o build de produção.
  allowedDevOrigins: ["192.168.1.*", "macbook", "macbook.local", "macbook.home", "*.local", "*.home"],
};

export default nextConfig;
