import styles from '../../styles/sub.module.css'
import Navbar from "../../comps/Navbar";
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
}




const sub = ({ ninjas }) => {
    console.log(ninjas)
    
    return ( 
        <>
            <Head>
                <title>List Learn | Sub</title>
                <meta name="keywords" content="learn"/>
            </Head>            
            <div>
                <h1>Sub</h1>
                {ninjas.map(ninja => (
                    <Link href={'/sub/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 


export default sub;