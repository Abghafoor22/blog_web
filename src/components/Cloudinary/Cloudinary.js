import conf from '../../conf/conf';
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: conf.cloudinaryName, 
    api_key: conf.cloudinaryApi, 
    api_secret: conf.cloudinaryApiSecret
});
    

export const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null

        const response = await cloudinary.uploader
       .upload(localFilePath, {resource_type: "auto"})

        console.log("the file has been upload on Cloudinary Successfully")

        return response
        // fs.unlinkSync(localFilePath) ToDO 
    } catch (error) {
        fs.unlinkSync(localFilePath) 

        return null
    }
}
   