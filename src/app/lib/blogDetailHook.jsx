
import { BaseApi } from "@/redux/slices/blogSlice"

export async function getBlog(id) {
    const res = await fetch(`${BaseApi+'blogs/'+ id}`, { cache: 'no-store' });
    console.log(res);
    
    if (!res.ok) throw new Error("Failed to fetch blog data");
  
    return res.json();
  }