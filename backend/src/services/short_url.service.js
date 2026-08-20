import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js";
import { saveUrlService } from "../dao/short_url.js";


export const createShortUrlWithoutService = async (url) => {
   const shortUrl = await generateNanoid(7);
    await saveUrlService(shortUrl, url);
    return shortUrl;
}

export const createShortUrlService = async (url, userId) => {
   const shortUrl = await generateNanoid(7);
    await saveUrlService(shortUrl, url , userId);
    return shortUrl;
}