
import { BaseApi } from "@/redux/slices/blogSlice"

export async function getClinic(id) {
    const res = await fetch(`${BaseApi+'clinics/'+ id}`, { cache: 'no-store' });
    console.log(id,'dsfsdfdsdfds');
    
  
  
    return res.json();
  }