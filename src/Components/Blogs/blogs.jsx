import Dropdown from '../ui/Dropdown';
import styles from './_blog.module.scss';
import { BlogItem } from './_components/item/blogitem';
import { Search } from './_components/search/search';
import EastIcon from '@mui/icons-material/East';
export function Blogs({blogs}) {
console.log(blogs);

    return (
        <>
            <section className={styles.Blogs}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <Search />

                     <h2>Bloq</h2>

                     <div className={styles.blog_list}>
                            {blogs?.map((item)=>(
                                <BlogItem item={item} key={item._id}/>
                            ))}
                        
                        <div className={styles.readMore}>
                            <button> <span>Hamsını göstər</span> <EastIcon/></button>
                        </div>
                     </div>
                    </div>
                    <Dropdown items={[  { value: "1", label: "Seçenek 1" },
    { value: "2", label: "Seçenek 2" },
    { value: "3", label: "Seçenek 3" },]} />
                </div>
            </section>

     
        </>

    )
}