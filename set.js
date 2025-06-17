const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PREFIXE: process.env.PREFIXE || "1",
  NOM_OWNER: process.env.NOM_OWNER || "𝙲𝙴𝙻𝙸𝙱𝙰𝚃𝙰𝙸𝚁𝙴",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "22782639423",
  MODE: process.env.MODE || "public",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_U0sPRBVu_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "𝙲𝙴𝙻𝙸𝙱𝙰𝚃𝙰𝙸𝚁𝙴",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "𝙲𝙴𝙻𝙸𝙱𝙰𝚃𝙰𝙸𝚁𝙴",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
  THEME: "1"
};
