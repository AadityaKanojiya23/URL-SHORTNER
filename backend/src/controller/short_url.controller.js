import { createShortUrlWithoutService } from "../services/short_url.service.js";
import { getUrlService } from "../dao/short_url.js"; // Fix 1: was missing, caused ReferenceError

export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const shortUrl = await createShortUrlWithoutService(url);
    res.send(process.env.APP_URL + shortUrl);
  } catch (error) {
    // Fix 2: unhandled promise rejection would crash the server
    res.status(500).send("Internal Server Error");
  }
};
  
export const redirectfromShortUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await getUrlService(id);
    if (url) {
      res.redirect(url.full_Url);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (error) {
    // Fix 2: unhandled promise rejection would crash the server
    res.status(500).send("Internal Server Error");
  }
};
