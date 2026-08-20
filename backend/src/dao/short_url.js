import urlSchema from "../models/short_url.model.js";


export const saveUrlService = async (shortUrl, longurl , userId) => {
        const newUrl = new urlSchema({
        full_Url: longurl,
        shortUrl: shortUrl,
    })
    if(userId){
        newUrl.user = userId; // Fix 3: was `userId`, but schema field is `user`
    }
    return await newUrl.save();
};

export const getUrlService = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({ shortUrl : shortUrl }, { $inc: { clicks: 1 } }, { new: true });
}

//ye humne isliye banaya hai taki hum short url ko database mai save kar sake, jisme humne short url aur long url ko save kiya hai. Agar userId available hai to usko bhi save kar diya hai. Finally humne newUrl.save() ka use karke database mai save kar diya hai. Hamne aisa kyu kiya hai taki hum short url ko database mai save kar sake aur usko access kar sake.