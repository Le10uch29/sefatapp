"use client"
import styles from './_search.module.scss';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
export function Search(){
  return (
    <form className={styles.search}>
    <div>
        <button className={styles.drop_down}><SwapVertIcon style={{fill:'#226D64'}}/> <span>Sırala</span></button>
    </div>
    <div className={styles.input_col}>
       <div className={styles.container_search_input}>
        <span className={styles.input_icon}><SearchIcon/></span>
       <input type="text" placeholder='Ex. Doctor, Hospital'/>
       </div>
    </div>

    <div>
        <button className={styles.form_submit}><SearchIcon/><span>Axtarış</span></button>
    </div>
</form>
  )
}